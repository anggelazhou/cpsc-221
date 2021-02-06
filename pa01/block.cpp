#include "block.h"
#include <cmath>
#include <iostream>

int Block::height() const {
  return data.size();
}

int Block::width() const {
  return data.at(0).size();
}

void Block::render(PNG &im, int x) const {
  for (int row=0; row<height(); row++) {
    for (int col=0; col<width(); col++) {
      HSLAPixel* p = im.getPixel(x+col, row);
      *p = data[row][col];
    }
  }
}

void Block::build(PNG &im, int x, int width) {
  data.resize(im.height());
  for (unsigned int row=0; row<im.height(); row++) {
    data[row].resize(width);
  }
  for (unsigned int row=0; row<im.height(); row++) {
    for (int col=0; col<width; col++) {
      data[row][col] = * im.getPixel(x+col, row);
    }
  }
}
