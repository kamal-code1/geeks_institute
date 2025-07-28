# Exercise 2 : Longest sentence without "A"

longest_sentence = ""

while True:
    sentence = input("Enter the longest sentence without the character 'A' (or 'quit' to exit): ")
    if sentence.lower() == 'quit':
        break
    if 'a' in sentence.lower():
        print("Your sentence contains the letter 'A'. Try again.")
        continue
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! This is the longest sentence without 'A' so far!")
    else:
        print("Try to beat the current longest sentence!")
