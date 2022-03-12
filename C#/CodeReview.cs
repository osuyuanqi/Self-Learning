for (stat 1; stat 2; stat 3) 
{
  // stat execute once only
  // define array method 1
  string[] cars;
  
  // Add values, must use new
  cars = new string[] {"Volvo", "BMW", "Ford"};
  //method2
  string[] cars1 = {"Volvo", "BMW", "Ford", "Mazda"};
  
  // loop usage
  foreach (string i in cars) 
  {
    Console.WriteLine(i);
  }

}
