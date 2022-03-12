using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!aa");

            for (int i = 0; i < 5; i++)
            {
                // int i = 0, execute once only
                Console.WriteLine(i);
            }
            // define array method 1
            string[] cars;

            // Add values, must use new
            cars = new string[] { "Volvo", "BMW", "Ford" };
            //method2
            string[] cars1 = { "Volvo", "BMW", "Ford", "Mazda" };

            // loop usage
            foreach (string j in cars)
            {
                Console.WriteLine(j);
            }
        }
    }
}
