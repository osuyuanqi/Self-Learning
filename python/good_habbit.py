from sort import *
def run_this(name: str, age: int)-> None:
	print("My name is", name, "I'm",age,"years old")
	my_goods = ["apple", "blueberries", "cake"]
	for item in my_goods:
		print(item)
if __name__ == "__main__":
	print("==== good_habbit program",__name__,"====")
	my_age = 16
	print("Welcome to my program")
	my_name = "Carolina"
	my_name = my_name.replace("C","K")
	run_this(my_name, my_age)