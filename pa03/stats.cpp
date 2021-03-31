#include "stats.h"

long stats::calcSum(PNG & im, char channel, int x, int y) {
    vector< vector< long >> * sum = channel == 'r' ? &sumRed 
            : (channel == 'g' ? &sumGreen : &sumBlue);
    
    RGBAPixel * curr = im.getPixel(x, y);
    long value = channel == 'r' ? curr->r 
            : (channel == 'g' ? curr->g : curr->b);

   if (x == 0) {
        if (y == 0) {
            return value;

        } else {
            // x = 0, y != 0
            long prevWidth = (*sum)[y-1][x];
            return value + prevWidth;
        }
    } else {
        if (y == 0) {
            // x != 0, y = 0
            long prevHeight = (*sum)[y][x-1];
            return value + prevHeight;
        } else {
            // x != 0, y != 0         
            long prevWidth = (*sum)[y-1][x];
            long prevHeight = (*sum)[y][x-1];
            long prevSubtract = (*sum)[y-1][x-1];           
            return value + prevWidth + prevHeight - prevSubtract;
        }
    } 
}

long stats::calcSumSq(PNG & im, char channel, int x, int y) {
    vector< vector< long >> * sumSq = channel == 'r' ? &sumsqRed 
                : (channel == 'g' ? &sumsqGreen : &sumsqBlue);
    
    RGBAPixel * curr = im.getPixel(x, y);
    long value = channel == 'r' ? curr->r 
            : (channel == 'g' ? curr->g : curr->b);
    value *= value; //square it

   if (x == 0) {
        if (y == 0) {
            return value;

        } else {
            // x = 0, y != 0
            long prevWidth = (*sumSq)[y-1][x];
            return value + prevWidth;
        }
    } else {
        if (y == 0) {
            // x != 0, y = 0
            long prevHeight = (*sumSq)[y][x-1];
            return value + prevHeight;
        } else {
            // x != 0, y != 0         
            long prevWidth = (*sumSq)[y-1][x];
            long prevHeight = (*sumSq)[y][x-1];
            long prevSubtract = (*sumSq)[y-1][x-1];           
            return value + prevWidth + prevHeight - prevSubtract;
        }
    } 
}

stats::stats(PNG & im){
/* Your code here!! */
sumRed.resize(im.height(), vector<long>(im.width()));
sumGreen.resize(im.height(), vector<long>(im.width()));
sumBlue.resize(im.height(), vector<long>(im.width()));
sumsqRed.resize(im.height(), vector<long>(im.width()));
sumsqGreen.resize(im.height(), vector<long>(im.width()));
sumsqBlue.resize(im.height(), vector<long>(im.width()));
for (unsigned int y = 0; y<im.height(); y++) {
    for (unsigned int x = 0; x<im.width(); x++) {
        sumRed[y][x] = calcSum(im, 'r', x, y);
        sumGreen[y][x] = calcSum(im, 'g', x, y);
        sumBlue[y][x] = calcSum(im, 'b', x, y);

        sumsqRed[y][x] = calcSumSq(im, 'r', x, y);
        sumsqGreen[y][x] = calcSumSq(im, 'g', x, y);
        sumsqBlue[y][x] = calcSumSq(im, 'b', x, y);
    }
}

}

long stats::getSum(char channel, pair<int,int> ul, int w, int h){
/* Your code here!! */
vector< vector< long >> * sum = channel == 'r' ? &sumRed 
        : (channel == 'g' ? &sumGreen : &sumBlue);

if (ul.first == 0) {
    if (ul.second == 0) {
        return (*sum)[ul.second + h -1][ul.first + w - 1];
    } else {
        return (*sum)[ul.second + h - 1][ul.first + w - 1] - (*sum)[ul.second -1][ul.first + w - 1];
    }
} else {
    if (ul.second == 0) { 
        return (*sum)[ul.second + h - 1][ul.first + w - 1] - (*sum)[ul.second + h - 1][ul.first - 1];
    } else {
        return (*sum)[ul.second + h - 1][ul.first + w - 1] - (*sum)[ul.second - 1][ul.first + w - 1]
        - (*sum)[ul.second + h - 1][ul.first - 1] + (*sum)[ul.second-1][ul.first-1];
    }
}

}

long stats::getSumSq(char channel, pair<int,int> ul, int w, int h){
/* Your code here!! */
vector< vector< long >> * sumSq = channel == 'r' ? &sumsqRed 
        : (channel == 'g' ? &sumsqGreen : &sumsqBlue);

if (ul.first == 0) {
    if (ul.second == 0) {
        return (*sumSq)[ul.second + h - 1][ul.first + w - 1];
    } else {
        return (*sumSq)[ul.second + h - 1][ul.first + w - 1] - (*sumSq)[ul.second - 1][ul.first + w - 1];
    }
} else {
    if (ul.second == 0) {
        return (*sumSq)[ul.second + h - 1][ul.first + w - 1] - (*sumSq)[ul.second + h - 1][ul.first - 1];
    } else {
        return (*sumSq)[ul.second + h - 1][ul.first + w - 1] - (*sumSq)[ul.second - 1][ul.first + w - 1]
        - (*sumSq)[ul.second + h - 1][ul.first - 1] + (*sumSq)[ul.second-1][ul.first-1];
    }
}

}

// given a rectangle, compute its sum of squared deviations from mean, over all color channels.
// see written specification for a description of this function.
double stats::getVar(pair<int,int> ul, int w, int h){
/* Your code here!! */
string k = to_string(ul.first) + "," + to_string(ul.second) + "," + to_string(w) + "," + to_string(h);

if (varMap.find(k) != varMap.end()) return varMap[k];

static double ONE = 1.0;
double red   = ONE*getSumSq('r', ul, w, h) - ONE*(getSum('r', ul, w, h)*getSum('r', ul, w, h))/(w*h*ONE);
double green = ONE*getSumSq('g', ul, w, h) - ONE*(getSum('g', ul, w, h)*getSum('g', ul, w, h))/(w*h*ONE);
double blue  = ONE*getSumSq('b', ul, w, h) - ONE*(getSum('b', ul, w, h)*getSum('b', ul, w, h))/(w*h*ONE);
double total = red + green + blue;
varMap[k] = total;

return total;
}
	
RGBAPixel stats::getAvg(pair<int,int> ul, int w, int h){
/* Your code here!! */
int r = getSum('r', ul, w, h)/(w*h);
int g = getSum('g', ul, w, h)/(w*h);
int b = getSum('b', ul, w, h)/(w*h);

return RGBAPixel(r, g, b);
}
