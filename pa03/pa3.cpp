// File:        pa3.cpp
// Author:      cs221 instructors
// Date:        2021-03-03
// Description: Partial test of PA3 functionality
//              Reads Point data from external files
//              Produces PNG images of the point sets

#include <chrono>
#include <ctime>
#include "sqtree.h"

using namespace std::chrono;

void testOnFile(string filename) {
  auto start = std::chrono::system_clock::now();

  // read in image
  PNG orig;
  orig.readFromFile("images/orig/" + filename);
  cout << "testing on file: " << filename 
      << ", whose w = " << orig.width() << "; h = " << orig.height() << endl;
  // orig.readFromFile("images/orig/small1.png");
  // orig.readFromFile("images/out/pic2x2.png");
  /*
  orig.readFromFile("images/orig/small2.png");
  orig.readFromFile("images/orig/pacman.png");
  orig.readFromFile("images/orig/huckleberry_hound.png");
  orig.readFromFile("images/orig/rocky.png");
  orig.readFromFile("images/orig/rocky_bullwinkle.png");
  orig.readFromFile("images/orig/colour.png");
  orig.readFromFile("images/orig/klee-flora-on-sand.png");
  orig.readFromFile("images/orig/stanley-totem-poles.png");
  */
  
  double tol = 10.0;
  // use it to build a sqtree (try other tolerances)
  SQtree t(orig, tol);

  // copy the tree (to show you can)
  SQtree tCopy(t);

  // render the sqtree
  PNG pic = t.render();

  // write it out
  // pic.writeToFile("images/out/small1.png");
  pic.writeToFile("images/out/" + filename);
  auto end = std::chrono::system_clock::now();

  chrono::duration<double> elapsed_seconds = end-start;
  time_t end_time = chrono::system_clock::to_time_t(end);

  cout << "With tol=" << tol << " : finished at " << ctime(&end_time)
            << "elapsed time: " << elapsed_seconds.count() << "s\n";
}

int main() {
  testOnFile( "small1.png" );                       // 8 * 8             //      0.010 s
  testOnFile( "small2.png" );                       // 8 * 8             //      0.004 s
  testOnFile( "pacman.png" );                       // 25 * 21           //      0.475 s
  testOnFile( "huckleberry_hound.png" );            // 48 * 48           //      9.933 s
  testOnFile( "rocky.png" );                        // 133 * 110         //         335.524 s 
  testOnFile( "rocky_bullwinkle.png" );             // 220 * 167         //  
  testOnFile( "stanley-totem-poles.png" );          // 520 * 563
  testOnFile( "colour.png" );                       // 640 * 426
  testOnFile( "klee-flora-on-sand.png" );           // 1010 * 768
  return 0;
}
