import random

wins = 0
losses = 0

while True:
    user_input = input("Guess a number from 1 to 9 (or 'quit' to exit): ")
    if user_input.lower() == 'quit':
        break

    if not user_input.isdigit() or not (1 <= int(user_input) <= 9):
        print("Please enter a valid number between 1 and 9.")
        continue

    guess = int(user_input)
    number = random.randint(1, 9)

    if guess == number:
        print("Winner")
        wins += 1
    else:
        print(f"Better luck next time. The number was {number}")
        losses += 1

print(f"Games won: {wins}, Games lost: {losses}")
