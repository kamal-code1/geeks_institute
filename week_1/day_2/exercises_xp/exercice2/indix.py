family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

def ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

total_cost = 0
for member, age in family.items():
    price = ticket_price(age)
    print(f"{member} has to pay ${price}")
    total_cost += price

print(f"Total cost for the family is ${total_cost}")

# Bonus: user input version
family_input = {}
n = int(input("How many family members do you want to add? "))
for _ in range(n):
    name = input("Enter name: ")
    age = int(input("Enter age: "))
    family_input[name] = age

total_cost_input = sum(ticket_price(age) for age in family_input.values())
print("Total cost for the input family is $", total_cost_input)
