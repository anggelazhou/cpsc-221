#ifndef CS221UTIL_HSLAPIXEL_H
#define CS221UTIL_HSLAPIXEL_H

class HSLAPixel {

   public:
   HSLAPixel();
   HSLAPixel(double newHue, double newSat, double newLum);
   HSLAPixel(double newHue, double newSat, double newLum, double newAlpha);

   double h;
   double s;
   double l;
   double a;

};

#endif