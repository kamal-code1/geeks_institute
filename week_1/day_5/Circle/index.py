import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must specify either radius or diameter")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f})"

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius > other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius


    def __le__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius <= other.radius

    def __ge__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius >= other.radius


if __name__ == "__main__":
    c1 = Circle(radius=3)
    c2 = Circle(diameter=10)
    print(c1)  
    print(c2)  

    print(f"Area c1: {c1.area():.2f}")
    print(f"Area c2: {c2.area():.2f}")

    c3 = c1 + c2
    print(f"Added circle: {c3}")

    print(f"Is c1 bigger than c2? {c1 > c2}")
    print(f"Is c1 equal to c2? {c1 == c2}")

    circles = [c2, c3, c1]
    print("Before sorting:", circles)
    circles.sort()
    print("After sorting:", circles)
