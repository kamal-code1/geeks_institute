number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

multiples = [number * i for i in range(1, length + 1)]

print(multiples)
