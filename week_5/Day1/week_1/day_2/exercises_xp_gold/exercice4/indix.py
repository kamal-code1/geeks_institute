import random

def throw_dice() -> int:
    return random.randint(1, 6)

def throw_until_doubles() -> int:
    throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        throws += 1
        if dice1 == dice2:
            break
    return throws

def main():
    results = []
    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

if __name__ == "__main__":
    main()
