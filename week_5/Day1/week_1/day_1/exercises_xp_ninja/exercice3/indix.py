# Exercise 3 : Working on a paragraph

paragraph = """
Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
"""

import re
sentences = re.split(r'[.!?]+', paragraph)
sentences = [s.strip() for s in sentences if s.strip()]
sentence_count = len(sentences)

words = paragraph.split()
word_count = len(words)

unique_words = set(word.lower().strip(".,'\"") for word in words)
unique_word_count = len(unique_words)

non_whitespace_count = len(re.sub(r'\s', '', paragraph))

avg_words_per_sentence = word_count / sentence_count if sentence_count else 0

non_unique_word_count = word_count - unique_word_count

print(f"Paragraph analysis:")
print(f"Total characters: {len(paragraph)}")
print(f"Total sentences: {sentence_count}")
print(f"Total words: {word_count}")
print(f"Unique words: {unique_word_count}")
print(f"Non-whitespace characters: {non_whitespace_count}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Non-unique words count: {non_unique_word_count}")
