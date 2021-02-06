# include "HSLAPixel.h"

// default constructor
HSLAPixel::HSLAPixel() {
    h = 0;
    s = 0;
    l = 1.0;
    a = 1.0;
}

// constructor with given hue, saturation, and luminance
HSLAPixel::HSLAPixel(double newHue, double newSat, double newLum) {
    h = newHue;
    s = newSat;
    l = newLum;
}

// constructor with given hue, saturation, luminance, and alpha
HSLAPixel::HSLAPixel(double newHue, double newSat, double newLum, double newAlpha) {
    h = newHue;
    s = newSat;
    l = newLum;
    a = newAlpha;
}