#include "block.h"
#include <cmath>
#include <iostream>

int Block::height() const {
  return data.at(0).size();
}

int Block::width() const {
  return data.size();
}

void Block::render(PNG &im, int x) const {
  for (int i=0; i<width(); i++) {
    for (int j=0; j<height(); j++) {
      HSLAPixel* p = im.getPixel(x+i, j);
      *p = data[i][j];
      p->h = data[i][j].h;
      p->s = data[i][j].s;
      p->l = data[i][j].l;
      p->a = data[i][j].a;
    }
  }
}

void Block::build(PNG &im, int x, int width) {
  data.resize(width);
  for (unsigned int i=0; i<width; i++) {
    data[i].resize(im.height());
  }
  for (unsigned int i=0; i<width; i++) {
    for (int j=0; j<im.height(); j++) {
      data[i][j] = * im.getPixel(x+i, j);
    }
  }
}