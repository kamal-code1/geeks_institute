def display_board(board):
    print()
    for i in range(3):
        row = " | ".join(board[i*3:(i+1)*3])
        print(f" {row} ")
        if i < 2:
            print("---+---+---")
    print()

def player_input(player, board):
    while True:
        try:
            pos = int(input(f"Player {player}, enter a position (1-9): "))
            if pos < 1 or pos > 9:
                print("Position must be between 1 and 9.")
            elif board[pos-1] != " ":
                print("Position already taken, choose another.")
            else:
                return pos - 1
        except ValueError:
            print("Invalid input, please enter a number between 1 and 9.")

def check_win(board):
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
        [0, 4, 8], [2, 4, 6]              # diagonals
    ]
    for cond in win_conditions:
        if board[cond[0]] == board[cond[1]] == board[cond[2]] != " ":
            return True
    return False

def play():
    board = [" "] * 9
    current_player = "X"
    moves_played = 0

    while moves_played < 9:
        display_board(board)
        pos = player_input(current_player, board)
        board[pos] = current_player
        moves_played += 1

        if check_win(board):
            display_board(board)
            print(f"Player {current_player} wins! 🎉")
            return

        # Switch player
        current_player = "O" if current_player == "X" else "X"

    display_board(board)
    print("It's a tie! 🤝")

if __name__ == "__main__":
    play()
