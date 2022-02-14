import sys
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

	# ==== import function execution ====
	arr = [3,2,1,6,4,8]
	# print(merSort(arr)),works when import whole module
	print(qs(arr)) # works now
	# ====================================
	# everything happens in this file begins
	# ====================================

	print("\n==== good_habbit program",__name__,"====")
	
	print("\n==== function runs tip ====")
	my_age = 16
	print("Welcome to my program")
	my_name = "Carolina"
	my_name = my_name.replace("C","K")
	run_this(my_name, my_age)
	
	print("\n==== save memory with generators ====")
	my_list = [i for i in range(10000)]
	print(sum(my_list))
	print(sys.getsizeof(my_list),'bytes')
	my_gen = (i for i in range(10000))
	print(sum(my_gen))
	print(sys.getsizeof(my_gen),'bytes')

	print("\n==== define default values ====")
	my_dic = {"item":"football","price":10.00}
	count = my_dic.get('count', 0)
	count = my_dic.setdefault('count',0)
	print(count)
	print(my_dic)
	print('\n==== sort complex iterable with sorted()')
	data = (3, 5, 1, 10, 9)
	sort_data = sorted(data, reverse = True)
	print(sort_data)
	data = [{"name": "Max", "age": 6},
	{"name": "Lisa", "age": 20},
	{"name": "Ben", "age": 9}
	]
	sorted_data = sorted(data,key = lambda x:x["age"])
	print(sorted_data)

	# ====================================
	# everything happens in this file ends
	# ====================================

	
