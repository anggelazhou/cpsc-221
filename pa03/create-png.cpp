#include "cs221util/PNG.h"
#include "cs221util/RGBAPixel.h"
using namespace cs221util;

int main() {

    PNG pic1(2, 2);

    pic1.getPixel(0, 0)->r = 10;
    pic1.getPixel(0, 0)->g = 10;
    pic1.getPixel(0, 0)->b = 10;

    pic1.getPixel(0, 1)->r = 20;
    pic1.getPixel(0, 1)->g = 20;
    pic1.getPixel(0, 1)->b = 20;

    pic1.getPixel(1, 0)->r = 80;
    pic1.getPixel(1, 0)->g = 80;
    pic1.getPixel(1, 0)->b = 80;

    pic1.getPixel(1, 1)->r = 100;
    pic1.getPixel(1, 1)->g = 100;
    pic1.getPixel(1, 1)->b = 100;

    pic1.writeToFile("images/out/pic2x2.png");
}