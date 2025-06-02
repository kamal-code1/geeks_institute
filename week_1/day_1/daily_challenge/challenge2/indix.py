word = input("Enter a word: ")

result = []

for char in word:
    if not result or char != result[-1]:
        result.append(char)

new_word = ''.join(result)
print(new_word)
