from datetime import datetime

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def draw_cake(candles):
    candle_str = 'i' * candles
    candle_line = f"   ___{candle_str}___"
    cake = f"""
{candle_line}
  |:H:a:p:p:y:|
__|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
"""
    print(cake)

def main():
    birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")
    try:
        birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
    except ValueError:
        print("Invalid date format. Please use DD/MM/YYYY.")
        return

    today = datetime.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    last_digit = age % 10
    if last_digit == 0:
        last_digit = 1

    if is_leap_year(birthdate.year):
        draw_cake(last_digit)
        draw_cake(last_digit)
    else:
        draw_cake(last_digit)

if __name__ == "__main__":
    main()
