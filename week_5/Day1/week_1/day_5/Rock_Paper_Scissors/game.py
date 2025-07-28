import random

class Game:
    def __init__(self):
        self.valid_items = ['rock', 'paper', 'scissors']

    def get_user_item(self):
        while True:
            user_input = input("Choose rock, paper or scissors: ").strip().lower()
            if user_input in self.valid_items:
                return user_input
            print("Invalid choice, please try again.")

    def get_computer_item(self):
        return random.choice(self.valid_items)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        # Rules: rock beats scissors, scissors beats paper, paper beats rock
        wins = {
            'rock': 'scissors',
            'scissors': 'paper',
            'paper': 'rock',
        }
        if wins[user_item] == computer_item:
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        if result == 'win':
            print(f"You selected {user_item}. The computer selected {computer_item}. You win!")
        elif result == 'loss':
            print(f"You selected {user_item}. The computer selected {computer_item}. You lose!")
        else:
            print(f"You selected {user_item}. The computer selected {computer_item}. It's a draw!")
        return result
