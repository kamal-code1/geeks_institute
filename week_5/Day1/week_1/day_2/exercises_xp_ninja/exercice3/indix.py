MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    ' ': '/'
}

def english_to_morse(text):
    morse = []
    for char in text.upper():
        if char in MORSE_CODE_DICT:
            morse.append(MORSE_CODE_DICT[char])
        else:
            morse.append('')
    return ' '.join(morse)

MORSE_TO_ENGLISH = {v: k for k, v in MORSE_CODE_DICT.items()}

def morse_to_english(morse_code):
    words = morse_code.split(' / ')
    decoded_words = []
    for word in words:
        chars = word.split()
        decoded_chars = [MORSE_TO_ENGLISH.get(char, '') for char in chars]
        decoded_words.append(''.join(decoded_chars))
    return ' '.join(decoded_words)

sample_text = "Hello World"
morse = english_to_morse(sample_text)
print(f"English to Morse: {morse}")

decoded = morse_to_english(morse)
print(f"Morse to English: {decoded}")
