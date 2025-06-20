import sqlite3
import bcrypt

# Connexion DB et création table users si pas existante
conn = sqlite3.connect('auth.db')
cursor = conn.cursor()
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL
)
''')
conn.commit()

def user_exists(username):
    cursor.execute("SELECT 1 FROM users WHERE username = ?", (username,))
    return cursor.fetchone() is not None

def add_user(username, password):
    password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    cursor.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", (username, password_hash))
    conn.commit()

def verify_user(username, password):
    cursor.execute("SELECT password_hash FROM users WHERE username = ?", (username,))
    result = cursor.fetchone()
    if not result:
        return False
    stored_hash = result[0]
    return bcrypt.checkpw(password.encode(), stored_hash)

def main():
    logged_in = None
    while True:
        command = input("Enter command (login/signup/exit): ").strip().lower()
        if command == 'exit':
            break
        elif command == 'login':
            username = input("Username: ").strip()
            password = input("Password: ").strip()
            if verify_user(username, password):
                print("You are now logged in.")
                logged_in = username
            else:
                print("Invalid username or password.")
        elif command == 'signup':
            while True:
                username = input("Choose a username: ").strip()
                if user_exists(username):
                    print("Username already exists. Try another.")
                else:
                    break
            password = input("Choose a password: ").strip()
            add_user(username, password)
            print("User signed up successfully.")
        else:
            print("Unknown command. Use login, signup or exit.")

if __name__ == "__main__":
    main()
