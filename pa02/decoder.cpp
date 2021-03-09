#include "decoder.h"
#include "queue.h"
#include "stack.h"
using namespace std;

decoder::decoder(const PNG & tm, pair<int,int> s)
   :start(s),mapImg(tm) {

    vector<vector<bool>> visitedMatrix;
    for (unsigned int y=0; y<mapImg.height(); y++) {
        vector<bool> row;
        for (unsigned int x=0; x<mapImg.width(); x++) {
            row.push_back(false);
        }
        visitedMatrix.push_back(row);
    }

    for (unsigned int y=0; y<mapImg.height(); y++) {
        vector<int> row;
        for (unsigned int x=0; x<mapImg.width(); x++) {
            row.push_back(-1);
        }
        distances.push_back(row);
    }
    
    Queue<pair<int, int>> queue;

    visitedMatrix.at(start.second).at(start.first) = true;
    distances.at(start.second).at(start.first) = 0;
    queue.enqueue(start);

    while (!queue.isEmpty()) {
        pair<int, int> curr = queue.dequeue();
        vector<pair<int, int>> lbra = neighbors(curr);
        for (int i=0; i<lbra.size(); i++) {
            pair<int, int> next = lbra.at(i);
            if (good(visitedMatrix, distances, curr, next)) {
                visitedMatrix.at(next.second).at(next.first) = true;   
                int distance = distances.at(curr.second).at(curr.first) + 1;
                distances.at(next.second).at(next.first) = distance;
                queue.enqueue(next);
            }
        }
    }

   // found the fareast
  pair<int, int> locFarest = findSpot();
    cout << "!!!! farest x=" << locFarest.first << " y=" << locFarest.second 
            << " distance=" << distances.at(locFarest.second).at(locFarest.first) << endl;

    for (unsigned int y=0; y<mapImg.height(); y++) {
        for (unsigned int x=0; x<mapImg.width(); x++) {
            visitedMatrix.at(y).at(x) = false;
        }
    }
    Stack<pair<int, int>> stack;
    stack.push(start);
    visitedMatrix.at(start.second).at(start.first) = true;


    pair<int, int> top = stack.peek();
    bool foundNext = false;
    while (top.first != locFarest.first || top.second != locFarest.second) {
        vector<pair<int, int>> lbra = neighbors(top);
        int currD = distances.at(top.second).at(top.first);
        foundNext = false;
        for (int i=0; i<lbra.size(); i++) {
            pair<int, int> next = lbra.at(i);
            if (next.first < 0 || next.first >= mapImg.width() 
                    || next.second < 0 || next.second >= mapImg.height()) {
                // out of boundary
                continue;
            }
            int nextVal = distances.at(next.second).at(next.first);
            if (nextVal == -1) {
                // unreachable
                continue;
            } else if (nextVal != currD + 1) {
                // not shortest path
                continue;
            } else {
                 if (visitedMatrix.at(next.second).at(next.first)) {
                     // visited before
                     continue;
                 }
                 visitedMatrix.at(next.second).at(next.first) = true;
                 stack.push(next);
                 foundNext = true;
                 break;
            }
        }       // end for
        if (!foundNext) {
            // dead end
            stack.pop();
        }
        top = stack.peek();
    }
    // found
    // cout << "!!!! FOUND !!!! x = " << top.first << ", y = " << top.second << endl;
    Stack<pair<int, int>> reversed;
    while (!stack.isEmpty()) {
        reversed.push(stack.pop());
    }
    while (!reversed.isEmpty()) {
        pathPts.push_back(reversed.pop());
    }
}

PNG decoder::renderSolution(){
   PNG solution(mapImg);
   for (int i=0; i<pathPts.size(); i++) {
      pair<int, int> loc = pathPts.at(i);
      RGBAPixel *pixel = solution.getPixel(loc.first, loc.second);
      pixel->r = 255;
      pixel->g = 0;
      pixel->b = 0;
   }
   return solution;
}

PNG decoder::renderMaze(){
    PNG maze(mapImg);
    for (unsigned int y=0; y<maze.height(); y++) {
        for (unsigned int x=0; x<maze.width(); x++) {
            int distance = distances.at(y).at(x);
            if (distance != -1) {      // maze reachable
               pair<int, int> loc(x, y);
               setGrey(maze, loc);
            }
        }
    }

    int x1 = start.first - 3;
    int y1 = start.second - 3;
    x1 = x1 >= 0 ? x1 : 0;
    y1 = y1 >= 0 ? y1 : 0;

    int x2 = start.first + 3;
    int y2 = start.second + 3;
    x2 = x2 < maze.width() ? x2 : maze.width() - 1;
    y2 = y2 < maze.height() ? y2 : maze.height() - 1;

    for (int y = y1; y <= y2; y++) {
        for (int x = x1; x <= x2; x++) {
            RGBAPixel* p = maze.getPixel(x, y);
            p->r = 255;
            p->g = 0;
            p->b = 0;
        }
    }
    return maze;
}

void decoder::setGrey(PNG & im, pair<int,int> loc){
   RGBAPixel * pixel = im.getPixel(loc.first, loc.second);
   pixel->r = 2 * (pixel->r / 4);
   pixel->g = 2 * (pixel->g / 4);
   pixel->b = 2 * (pixel->b / 4);
}

pair<int,int> decoder::findSpot(){
    pair<int, int> locFarest;
    int farest = -1;
    for (unsigned int y=0; y<mapImg.height(); y++) {
        for (unsigned int x=0; x<mapImg.width(); x++) {
            int d = distances.at(y).at(x);
            if (d != -1) {
                // int dToStart = labs(x - start.first) + labs(y - start.second);
                int dToStart = d;
                if (dToStart > farest) {
                    farest = dToStart;
                    locFarest.first = x;
                    locFarest.second = y;
                }
            }
        }
    }
    return locFarest;
}

int decoder::pathLength(){
   int total = 0;
   pair<int, int> prev = pathPts.at(0);
   for (int i=1; i<pathPts.size(); i++) {
      pair<int, int> curr = pathPts.at(i);
      total += abs(curr.first - prev.first) + abs(curr.second - prev.second);
      prev = curr;
   }
   return total;
}

bool decoder::good(vector<vector<bool>> & v, vector<vector<int>> & d, pair<int,int> curr, pair<int,int> next){
   if (next.first < 0 || next.first >= mapImg.width() 
           || next.second < 0 || next.second >= mapImg.height()) {
       return false;
   }
   int currVal = d.at(curr.second).at(curr.first);
   if ( v.at(next.second).at(next.first) ) {   // visited already
        int prevDist = d.at(next.second).at(next.first);
        if (prevDist <= currVal + 1) {
            // prev path is shorter or even
            return false;
        } else {
            // curr path is shorter
            return true;        
        }
   } else {             // never visit
        RGBAPixel *nextPixel = mapImg.getPixel(next.first, next.second);
        return compare(*nextPixel, currVal);
   }
}

vector<pair<int,int>> decoder::neighbors(pair<int,int> curr) {
    pair<int, int> left(curr.first - 1, curr.second);
    pair<int, int> below(curr.first, curr.second + 1);
    pair<int, int> right(curr.first + 1, curr.second);
    pair<int, int> above(curr.first, curr.second - 1);

    vector<pair<int, int>> ret;
    ret.push_back(left);
    ret.push_back(below);
    ret.push_back(right);
    ret.push_back(above);
    return ret;
}


bool decoder::compare(RGBAPixel p, int d){
   int high = p.r & 3;
   int middle = p.g & 3;
   int low = p.b & 3;
   int val = (high << 4) + (middle << 2) + low;
   return val == (d + 1) % 64;
}
