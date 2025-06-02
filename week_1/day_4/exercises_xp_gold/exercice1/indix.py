class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print(f"{self.username} authenticated successfully.")
        else:
            self.authenticated = False
            print("Authentication failed.")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise Exception("Deposit amount must be positive.")
        self.balance += amount
        print(f"Deposited {amount}. New balance is {self.balance}.")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance is {self.balance}.")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception(
                f"Cannot withdraw. Balance would go below minimum of {self.minimum_balance}."
            )
        self.balance -= amount
        print(f"Withdrew {amount}. New balance is {self.balance}.")


class ATM:
    def __init__(self, account_list, try_limit=2):
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list.")
        if not all(isinstance(acc, (BankAccount, MinimumBalanceAccount)) for acc in account_list):
            raise Exception("All accounts must be BankAccount or MinimumBalanceAccount instances.")
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit given. Defaulting try_limit to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- ATM Main Menu ---")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select option (1 or 2): ")
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Thank you for using the ATM. Goodbye!")
                break
            else:
                print("Invalid choice. Please select 1 or 2.")

    def log_in(self, username, password):
        for account in self.account_list:
            account.authenticate(username, password)
            if account.authenticated:
                print(f"Welcome {username}!")
                self.show_account_menu(account)
                return
        # If none authenticated:
        self.current_tries += 1
        print(f"Incorrect username or password. Attempt {self.current_tries}/{self.try_limit}")
        if self.current_tries >= self.try_limit:
            print("Max tries reached. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print(f"\n--- Account Menu for {account.username} ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Check Balance")
            print("4. Log out")
            choice = input("Select option (1-4): ")

            if choice == "1":
                try:
                    amount = int(input("Enter amount to deposit: "))
                    account.deposit(amount)
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == "2":
                try:
                    amount = int(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == "3":
                print(f"Your current balance is: {account.balance}")

            elif choice == "4":
                account.authenticated = False
                print("Logged out.")
                break

            else:
                print("Invalid option. Please select 1-4.")



if __name__ == "__main__":
    acc1 = BankAccount("alice", "password123", 1000)
    acc2 = MinimumBalanceAccount("bob", "secure456", 2000, minimum_balance=500)
    atm = ATM([acc1, acc2])
