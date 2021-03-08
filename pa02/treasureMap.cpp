#include "treasureMap.h"
#include "queue.h"
using namespace std;

treasureMap::treasureMap(const PNG & baseim, const PNG & mazeim, pair<int,int> s)
{
    base = baseim;
    maze = mazeim;
    start = s;
}

void treasureMap::setGrey(PNG & im, pair<int,int> loc){
    RGBAPixel * pixel = im.getPixel(loc.first, loc.second);
    // pixel->r = (pixel->r % 4) + 2 * (pixel->r / 4);
    pixel->r = 2 * (pixel->r / 4);
    pixel->g = 2 * (pixel->g / 4);
    pixel->b = 2 * (pixel->b / 4);
}

void treasureMap::setLOB(PNG & im, pair<int,int> loc, int d){
    int val = d % 64;
    int lower  = val & 0x3;
    int middle = (val >> 2) & 0x3;
    int high   = (val >> 4) & 0x3;

    RGBAPixel * pixel = im.getPixel(loc.first, loc.second);
    pixel->r = ( pixel->r / 4 ) * 4 + high;
    pixel->g = ( pixel->g / 4 ) * 4 + middle;
    pixel->b = ( pixel->b / 4 ) * 4 + lower;
}

PNG treasureMap::renderMap(){
    PNG map(base);

    // 1.a
    vector<vector<bool>> visitedMatrix;
    for (unsigned int y=0; y<base.height(); y++) {
        vector<bool> row;
        for (unsigned int x=0; x<base.width(); x++) {
            row.push_back(false);
        }
        visitedMatrix.push_back(row);
    }

    // 1.b
    vector<vector<int>> pathLenMatrix;
    for (unsigned int y=0; y<base.height(); y++) {
        vector<int> row;
        for (unsigned int x=0; x<base.width(); x++) {
            row.push_back(-1);
        }
        pathLenMatrix.push_back(row);
    }
    
    // 2.
    Queue<pair<int, int>> queue;

    // 3.
    visitedMatrix.at(start.second).at(start.first) = true;
    pathLenMatrix.at(start.second).at(start.first) = 0;
    setLOB(map, start, 0);
    queue.enqueue(start);

    // 4.
    while (!queue.isEmpty()) {
        pair<int, int> curr = queue.dequeue();
        vector<pair<int, int>> lbra = neighbors(curr);
        for (int i=0; i<lbra.size(); i++) {
            pair<int, int> next = lbra.at(i);
            if (good(visitedMatrix, curr, next)) {
                visitedMatrix.at(next.second).at(next.first) = true;
                int distance = pathLenMatrix.at(curr.second).at(curr.first) + 1;
                pathLenMatrix.at(next.second).at(next.first) = distance;
                setLOB(map, next, distance);
                queue.enqueue(next);
            }
        }
    }

    // 5.
    return map;
}

PNG treasureMap::renderMaze() {
    PNG mixed(base);

    vector<vector<bool>> visitedMatrix;
    for (unsigned int y=0; y<base.height(); y++) {
        vector<bool> row;
        for (unsigned int x=0; x<base.width(); x++) {
            row.push_back(false);
        }
        visitedMatrix.push_back(row);
    }

    visitedMatrix.at(start.second).at(start.first) = true;

    Queue<pair<int, int>> queue;
    setGrey(mixed, start);
    queue.enqueue(start);

    while (!queue.isEmpty()) {
        pair<int, int> curr = queue.dequeue();
        vector<pair<int, int>> lbra = neighbors(curr);
        for (int i=0; i<lbra.size(); i++) {
            pair<int, int> next = lbra.at(i);
            if (good(visitedMatrix, curr, next)) {
                visitedMatrix.at(next.second).at(next.first) = true;
                setGrey(mixed, next);
                queue.enqueue(next);
            }
        }
    }

    // draw a red 7px x 7px square
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
            RGBAPixel* p = mixed.getPixel(x, y);
            p->r = 255;
            p->g = 0;
            p->b = 0;
        }
    }

    return mixed;
}

bool treasureMap::good(vector<vector<bool>> & v, pair<int,int> curr, pair<int,int> next){
    if (next.first < 0 || next.first >= maze.width() 
            || next.second < 0 || next.second >= maze.height()) {
        return false;
    }
    if ( v.at(next.second).at(next.first) ) {   // visited already
        return false;
    }
    RGBAPixel* currPixel = maze.getPixel(curr.first, curr.second);
    RGBAPixel* nextPixel = maze.getPixel(next.first, next.second);
    return (*currPixel) == (*nextPixel);
}

vector<pair<int,int>> treasureMap::neighbors(pair<int,int> curr) {
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


