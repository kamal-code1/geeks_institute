class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_score:
            return f"{self.name} won the fight!"
        elif self_score < other_score:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"


dog1 = Dog("Max", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Rocky", 7, 25)

print(dog1.bark())
print(dog2.run_speed())
print(dog3.fight(dog1))
