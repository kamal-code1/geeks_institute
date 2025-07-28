birthdays = {
    "Alice": "1990/05/21",
    "Bob": "1988/11/13",
    "Charlie": "1995/07/30",
    "Diana": "2000/01/15",
    "Eve": "1985/09/05"
}

print("Welcome! You can look up the birthdays of the people in the list!")

name = input("Enter a person's name: ")
birthday = birthdays.get(name)

if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")
