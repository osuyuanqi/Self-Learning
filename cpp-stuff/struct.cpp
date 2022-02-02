/*
 * CS 161-020, Lecture 20, Winter 2020
 * Sample: .operator: access a member; -> operator: dereference pointer and access a member
 * Author: Raymond Yuan
 * Date: December 26, 2021
 */
#include <iostream>

using namespace std;

struct animal {
 int n_eyes;
 float weight;
 string name;
};

// pass by reference, must &, or can't change value after function
void add_weight_r(animal& an){
  an.weight++;
}
//pass by pointer-> has to dereference
void add_n_eyes_p(animal* an){
  //(*an).n_eyes++;same
  an->n_eyes++;
}

int main() {
  animal* deer = new animal;
  // change n_eyes
  deer->n_eyes = 1;
  cout<< "1:" << deer->n_eyes<<endl;
  
  // another way: since the deer is a pointer
  (*deer).n_eyes = 10;
  cout << "2:" << deer->n_eyes << endl;
  
  // must in order
  animal bear = {2, 17.5, "bear"};
  // no need to dereference
  cout<< "3:" << bear.weight << endl;
  
  add_weight_r(bear);
  cout<< "4:" << bear.weight << endl;

  add_n_eyes_p(deer);
  cout<< "5:" << deer->n_eyes << endl;
  return 0;
}
