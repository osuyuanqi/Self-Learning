/*
 * CS 161-020, Lecture 13, Winter 2020
 * Pass by reference demo
 * Author: Raymond Yuan
 * Date: December 26, 2021
 */
#include <iostream>

using namespace std;

//get the address of s => &s
void compute_mult(int x, int y, int& s) { 
  cout << &s << endl; // 2. address of s
  cout << s << endl; // 3. 0
  s = x * y; // 4.operate the content s directly from its address, so the s = 6 now.
}


int main() {
  int x = 2, y = 3, sum = 0;
  compute_mult(x, y, sum); // 1. pass the sum, not &sum
  // 5. sum = 6 after the operation
  cout << sum << endl; // 6. output 6
  return 0;
}
