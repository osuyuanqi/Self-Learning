/*
 * CS 161-020, Lecture 18, Winter 2020
 * Stack and Heap demo
 * Author: Raymond Yuan
 * Date: December 25, 2021
 */
#include <iostream>

using namespace std;

// dynamic array initialize
int** creat2D(int rows, int cols){
  //must be initialize first
  int** arr = new int*[rows];
  for(int i = 0; i < rows; i ++)
    arr[i] = new int[cols];
  
  //then read the value
  for (int i = 0; i < rows; i ++)
    for(int j = 0; j <cols; j++)
    {
      arr[i][j] = i + j;
    }
    return arr;
  }

int main() {
  int row = 2, col = 3;
  //stack array
  //initialize
  int stack_arr[row][col];
  for(int i = 0; i < row; i++)
    for(int j = 0; j< col; j++)
      stack_arr[i][j] = i + j;

  //heap array
  int** heap_arr = creat2D(row, col);
  
  //print
  cout << "Stack array" << endl;
  for (int i = 0; i < row; i ++)
  {
    for(int j = 0; j < col; j++)
      cout << stack_arr[i][j] << ",";
    cout << endl;
  }
  cout << "Heap array" << endl;
  for (int i = 0; i < row; i ++)
  {
    for(int j = 0; j < col; j++)
      cout << heap_arr[i][j] << ",";
    cout << endl;
  }

  // free heap memory
  for (int i = 0; i < row; i++){
    delete [] heap_arr[i];
    heap_arr[i] = NULL;
  }
  delete [] heap_arr;
  heap_arr = NULL;


  // Lecture 27: The heap is bigger than the stack
  
  /* Static allocation */
  // int my_train_static[10000000]; // seg fault

  /* Dynamic allocation */
  int* my_train_dyn = new int[10000000];
  delete [] my_train_dyn;
  my_train_dyn = NULL;
  
  return 0;
  }
