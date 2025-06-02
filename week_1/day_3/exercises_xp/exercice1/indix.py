class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def find_oldest_cat(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

# Instanciation de trois chats
cat1 = Cat("Whiskers", 5)
cat2 = Cat("Tom", 8)
cat3 = Cat("Garfield", 6)

cats = [cat1, cat2, cat3]

oldest_cat = find_oldest_cat(cats)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
