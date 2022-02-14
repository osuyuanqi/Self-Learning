# ========================
# import whole module
# ========================
# from sort import * 

# ========================
# import specific module
# ========================
from sort import qsort as qs

def run_this(name: str, age: int)-> None:
	print("My name is", name, "I'm",age,"years old")
	my_goods = ["apple", "blueberries", "cake"]
	for item in my_goods:
		print(item)
if __name__ == "__main__":
	# ============================
	# everything happens in this file begins
	print("==== good_habbit program",__name__,"====")
	my_age = 16
	print("Welcome to my program")
	my_name = "Carolina"
	my_name = my_name.replace("C","K")
	run_this(my_name, my_age)
	# everything happens in this file ends
	# ============================
	
	# ==== import function execution ====
	arr = [3,2,1,6,4,8]
	# print(merSort(arr)),works when import whole module
	print(qs(arr)) # works now
	# ============================
