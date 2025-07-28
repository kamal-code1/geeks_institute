import random

def get_random_temp(season=None):
    if season == "winter":
        low, high = -10, 16
    elif season == "spring":
        low, high = 0, 23
    elif season == "summer":
        low, high = 24, 40
    elif season == "autumn" or season == "fall":
        low, high = 0, 23
    else:
        low, high = -10, 40

    return random.uniform(low, high)  # floating point for bonus

def main():
    season = input("Enter a season (summer, autumn/fall, winter, spring): ").lower()
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp:.1f} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif 17 <= temp <= 23:
        print("The weather is mild.")
    elif 24 <= temp <= 32:
        print("Nice and warm today.")
    else:
        print("It's hot! Stay hydrated.")

main()
