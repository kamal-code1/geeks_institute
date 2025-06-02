car_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

car_list = [car.strip() for car in car_str.split(",")]

print(f"Number of manufacturers: {len(car_list)}")

sorted_desc = sorted(car_list, reverse=True)
print("Manufacturers in descending order:", sorted_desc)

count_o = sum(1 for car in car_list if 'o' in car.lower())
print(f"Number of manufacturers with 'o': {count_o}")

count_no_i = sum(1 for car in car_list if 'i' not in car.lower())
print(f"Number of manufacturers without 'i': {count_no_i}")

cars_with_duplicates = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

cars_no_duplicates = sorted(set(cars_with_duplicates))

print(f"Manufacturers without duplicates: {', '.join(cars_no_duplicates)}")
print(f"Number of manufacturers without duplicates: {len(cars_no_duplicates)}")

reversed_names = [name[::-1] for name in sorted(cars_no_duplicates)]
print("Manufacturers sorted A-Z with letters reversed:", reversed_names)
