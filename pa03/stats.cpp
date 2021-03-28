#include "stats.h"

long stats::calcSum(PNG & im, char channel, int x, int y) {
    long prev = 0;

    if (y != 0) {
        vector< vector< long >> sum = channel == 'r' ? sumRed 
                : (channel == 'g' ? sumGreen : sumBlue);
        prev = sum[y-1][x];
    } 

    long value = 0;

    for (int i = 0; i <= x; i++) {
        RGBAPixel * curr = im.getPixel(x, y); 
        if (channel == 'r') {
            value += curr->r;
        } else if (channel == 'g') {
            value += curr->g;
        } else {
            value += curr->b;
        }
    }

    return value + prev;
}

long stats::calcSumSq(PNG & im, char channel, int x, int y) {
    long prev = 0;

    if (y != 0) {
        vector< vector< long >> sumSq = channel == 'r' ? sumsqRed 
                : (channel == 'g' ? sumsqGreen : sumsqBlue);
        prev = sumSq[y-1][x];
    } 

    long value = 0;

    for (int i = 0; i <= x; i++) {
        RGBAPixel * curr = im.getPixel(x, y); 
        if (channel == 'r') {
            value += (curr->r)*(curr->r);
        } else if (channel == 'g') {
            value += (curr->g)*(curr->g);
        } else {
            value += (curr->b)*(curr->b);
        }
    }

    return value + prev;
}

stats::stats(PNG & im){
/* Your code here!! */

for (unsigned int y = 0; y<im.height(); y++) {
    vector<long> red;
    vector<long> green;
    vector<long> blue;

    vector<long> redSq;
    vector<long> greenSq;
    vector<long> blueSq;

    for (unsigned int x = 0; x<im.width(); x++) {
        red.push_back(calcSum(im, 'r', x, y));
        green.push_back(calcSum(im, 'g', x, y));
        blue.push_back(calcSum(im, 'b', x, y));

        redSq.push_back(calcSumSq(im, 'r', x, y));
        greenSq.push_back(calcSumSq(im, 'g', x, y));
        blueSq.push_back(calcSumSq(im, 'b', x, y));

    }

    sumRed.push_back(red);
    sumGreen.push_back(green);
    sumBlue.push_back(blue);

    sumsqRed.push_back(redSq);
    sumsqGreen.push_back(greenSq);
    sumsqBlue.push_back(blueSq);
}

}

long stats::getSum(char channel, pair<int,int> ul, int w, int h){
/* Your code here!! */
vector< vector< long >> sum = channel == 'r' ? sumRed 
        : (channel == 'g' ? sumGreen : sumBlue);

if (ul.first == 0) {
    if (ul.second == 0) {
        return sum[ul.second + h][ul.first + w];
    } else {
        return sum[ul.second + h][ul.first + w] - sum[ul.second][ul.first + w];
    }
} else {
    if (ul.second == 0) { 
        return sum[ul.second + h][ul.first + w] - sum[ul.second + h][ul.first];
    } else {
        return sum[ul.second + h][ul.first + w] - sum[ul.second][ul.first + w]
        - sum[ul.second + h][ul.first] + sum[ul.second-1][ul.first-1];
    }
}

}

long stats::getSumSq(char channel, pair<int,int> ul, int w, int h){
/* Your code here!! */
vector< vector< long >> sumSq = channel == 'r' ? sumsqRed 
        : (channel == 'g' ? sumsqGreen : sumsqBlue);

if (ul.first == 0) {
    if (ul.second == 0) {
        return sumSq[ul.second + h][ul.first + w];
    } else {
        return sumSq[ul.second + h][ul.first + w] - sumSq[ul.second][ul.first + w];
    }
} else {
    if (ul.second == 0) {
        return sumSq[ul.second + h][ul.first + w] - sumSq[ul.second + h][ul.first];
    } else {
        return sumSq[ul.second + h][ul.first + w] - sumSq[ul.second][ul.first + w]
        - sumSq[ul.second + h][ul.first] + sumSq[ul.second-1][ul.first-1];
    }
}

}

// given a rectangle, compute its sum of squared deviations from mean, over all color channels.
// see written specification for a description of this function.
double stats::getVar(pair<int,int> ul, int w, int h){
/* Your code here!! */
double red   = 1.0*getSumSq('r', ul, w, h) - 1.0*(getSum('r', ul, w, h)*getSum('r', ul, w, h))/(w*h);
double green = 1.0*getSumSq('g', ul, w, h) - 1.0*(getSum('g', ul, w, h)*getSum('g', ul, w, h))/(w*h);
double blue  = 1.0*getSumSq('b', ul, w, h) - 1.0*(getSum('b', ul, w, h)*getSum('b', ul, w, h))/(w*h);

return red + green + blue;
}
	
RGBAPixel stats::getAvg(pair<int,int> ul, int w, int h){
/* Your code here!! */
int r = getSum('r', ul, w, h)/(w*h);
int g = getSum('g', ul, w, h)/(w*h);
int b = getSum('b', ul, w, h)/(w*h);

return RGBAPixel(r, g, b);
}
