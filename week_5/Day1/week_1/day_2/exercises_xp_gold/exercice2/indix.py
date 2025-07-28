birthdays = {
    "Alice": "1990/05/21",
    "Bob": "1988/11/13",
    "Charlie": "1995/07/30",
    "Diana": "2000/01/15",
    "Eve": "1985/09/05"
}

print("Here are the people in the birthday list:")
for person in birthdays:
    print(person)

name = input("Enter a person's name to look up: ")

if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")
