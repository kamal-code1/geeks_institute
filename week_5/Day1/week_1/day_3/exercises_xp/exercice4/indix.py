class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        print(f"Animals in {self.name} Zoo:")
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    
    def sort_animals(self):
        groups = {}
        for animal in sorted(self.animals):
            key = animal[0].upper()
            if key in groups:
                groups[key].append(animal)
            else:
                groups[key] = [animal]
        self.groups = groups
    
    def get_groups(self):
        print(f"Animal groups in {self.name} Zoo:")
        for key, group in self.groups.items():
            if len(group) == 1:
                print(f"{key}: {group[0]}")
            else:
                print(f"{key}: {group}")

new_york_zoo = Zoo("New York")

new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Baboon")

new_york_zoo.sort_animals()
new_york_zoo.get_groups()
