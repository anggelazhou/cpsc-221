/**
 *
 * shifty quadtree (pa3)
 * sqtree.cpp
 * This file will be used for grading.
 *
 */

#include "sqtree.h"

// First Node constructor, given.
SQtree::Node::Node(pair<int,int> ul, int w, int h, RGBAPixel a, double v)
  :upLeft(ul),width(w),height(h),avg(a),var(v),NW(NULL),NE(NULL),SE(NULL),SW(NULL)
{}

// Second Node constructor, given
SQtree::Node::Node(stats & s, pair<int,int> ul, int w, int h)
  :upLeft(ul),width(w),height(h),NW(NULL),NE(NULL),SE(NULL),SW(NULL) {
  avg = s.getAvg(ul,w,h);
  var = s.getVar(ul,w,h);
}

// SQtree destructor, given.
SQtree::~SQtree() {
  clear();
}

// SQtree copy constructor, given.
SQtree::SQtree(const SQtree & other) {
  copy(other);
}

// SQtree assignment operator, given.
SQtree & SQtree::operator=(const SQtree & rhs) {
  if (this != &rhs) {
    clear();
    copy(rhs);
  }
  return *this;
}

/**
 * SQtree constructor given tolerance for variance.
 */
SQtree::SQtree(PNG & imIn, double tol) {
  // Your code here.
  stats s(imIn);
  pair<int,int> origin(0, 0);
  root = buildTree(s, origin, imIn.width(), imIn.height(), tol);

}

/**
 * Helper for the SQtree constructor.
 */
SQtree::Node * SQtree::buildTree(stats & s, pair<int,int> & ul,
				 int w, int h, double tol) {
  // Your code here.
  Node * node = new Node(s, ul, w, h);
  
  double minMaxVar = -1;
  int minX;
  int minY;

  bool withinTol = false;
  for (int x = 0; x < w && !withinTol; x++) {
    for (int y = 0; y < h && !withinTol; y++) {
      if (x == 0 && y == 0) {
        // itself so don't do anything
        continue;
      }

      double neVar = -1;
      double nwVar = -1;
      double seVar = -1;
      double swVar = -1;

      if (x == 0) {
        // horizontal cuts
        nwVar = s.getVar(ul, w, y); 
        pair<int,int> newUl(ul.first, ul.second + y);
        swVar = s.getVar(newUl, w, h - y);
      } else if (y == 0) {
        // vertical cuts
        nwVar = s.getVar(ul, x, h);
        pair<int,int> newUl(ul.first + x, ul.second);
        neVar = s.getVar(newUl, w - x, h);
      } else {
        // horizontal and vertical cuts
        nwVar = s.getVar(ul, x, y);

        pair<int,int> newUl(ul.first + x, ul.second);
        neVar = s.getVar(newUl, w - x, y);

        pair<int,int> newUl1(ul.first, ul.second + y);
        swVar = s.getVar(newUl1, x, h - y);

        pair<int,int> newUl2(ul.first + x, ul.second + y);
        seVar = s.getVar(newUl2, w - x, h - y);
      }

      // save biggest variance from the two/four
      double currMax = max(max(neVar, nwVar), max(seVar, swVar));

      // find the minimum variance from the maximums
     if (currMax >= tol) {
        if (minMaxVar == -1 || minMaxVar > currMax) {
          minMaxVar = currMax;
          minX = x;
          minY = y;
        } else if (minMaxVar == currMax) {
          if ( (minX == 0 || minY == 0) && x != 0 && y != 0 ) {
            minX = x;
            minY = y;
          }
        }
      } else {
        withinTol = true;
      }
    }
  }
  
  if (!withinTol && minMaxVar != -1) {       // either within tolerance or is 1X1
    // split
    if (minX == 0) {
      node->NW = buildTree(s, ul, w, minY, tol); 
      pair<int,int> newUl(ul.first, ul.second + minY);
      node->SW = buildTree(s, newUl, w, h - minY, tol);
    } else if (minY == 0) {
      node->NW = buildTree(s, ul, minX, h, tol);
      pair<int,int> newUl(ul.first + minX, ul.second);
      node->NE = buildTree(s, newUl, w - minX, h, tol);
    } else {
      node->NW = buildTree(s, ul,minX, minY, tol);

      pair<int,int> newUl(ul.first + minX, ul.second);
      node->NE = buildTree(s, newUl, w - minX, minY, tol);

      pair<int,int> newUl1(ul.first, ul.second + minY);
      node->SW = buildTree(s, newUl1, minX, h - minY, tol);

      pair<int,int> newUl2(ul.first + minX, ul.second + minY);
      node->SE = buildTree(s, newUl2, w - minX, h - minY, tol);
    }
  } 

  return node;
}
  
/**
 * Render SQtree and return the resulting image.
 */
PNG SQtree::render() {
  // Your code here.
  PNG ret(root->width, root->height);

  renderNode(root, ret);
  return ret;
}

/**
 * Delete allocated memory.
 */
void SQtree::clear() {
  // Your code here.
  deleteNode(root);
}

void SQtree::copy(const SQtree & other) {
  // Your code here.
  root = copyNode(other.root);
}

int SQtree::size() {
  // Your code here.
  return nodeCount(root);
}

int SQtree::nodeCount(Node * node) {
  int count = 1;

  if (node->NE != NULL) {
    count += nodeCount(node->NE);
  }
  
  if (node->NW != NULL) {
    count += nodeCount(node->NW);
  }
  
  if (node->SE != NULL) {
    count += nodeCount(node->SE);
  }
  
  if (node->SW != NULL) {
    count += nodeCount(node->SW);
  }

  return count;
}

void SQtree::deleteNode(Node * node) {
  if (node->NE != NULL) {
    deleteNode(node->NE);
  }
  
  if (node->NW != NULL) {
    deleteNode(node->NW);
  }
  
  if (node->SE != NULL) {
    deleteNode(node->SE);
  }
  
  if (node->SW != NULL) {
    deleteNode(node->SW);
  }

  delete node;
}

SQtree::Node * SQtree::copyNode(Node * node) {
  Node * ret = new Node(node->upLeft, node->width, node->height, node->avg, node->var);
  
  if (node->NE != NULL) {
    ret->NE = copyNode(node->NE);
  }
  
  if (node->NW != NULL) {
    ret->NW = copyNode(node->NW);
  }
  
  if (node->SE != NULL) {
    ret->SE = copyNode(node->SE);
  }
  
  if (node->SW != NULL) {
    ret->SW = copyNode(node->SW);
  }

  return ret;
}

void SQtree::renderNode(Node * node, PNG & im) {
  bool leaf = true;

  if (node->NE != NULL) {
    renderNode(node->NE, im);
    leaf = false;
  }
  
  if (node->NW != NULL) {
    renderNode(node->NW, im);
    leaf = false;
  }
  
  if (node->SE != NULL) {
    renderNode(node->SE, im);
    leaf = false;
  }
  
  if (node->SW != NULL) {
    renderNode(node->SW, im);
    leaf = false;
  }

  if (leaf) {
    for (int x = node->upLeft.first; x < node->width + node->upLeft.first; x++) {
      for(int y = node->upLeft.second; y < node->height + node->upLeft.second; y++) {
        RGBAPixel * pixel = im.getPixel(x, y);
        pixel->r = node->avg.r;
        pixel->g = node->avg.g;    
        pixel->b = node->avg.b;    
      }
    }
  }
}

