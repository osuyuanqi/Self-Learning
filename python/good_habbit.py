def run_this(name: str, age: int)-> None:
	print("My name is", name, "I'm",age,"years old")
	my_goods = ["apple", "blueberries", "cake"]
	for item in my_goods:
		print(item)
print(__name__)
if __name__ == "__main__":
	my_age = 16
	print("Welcome to my program")
	my_name = "Carolina"
	my_name = my_name.replace("C","K")
	run_this(my_name, my_age)