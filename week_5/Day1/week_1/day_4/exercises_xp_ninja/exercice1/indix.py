class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        if initial_state:
            self.grid = initial_state
        else:
            self.grid = [[0 for _ in range(cols)] for _ in range(rows)]

    def display(self):
        for row in self.grid:
            print(' '.join('O' if cell else '.' for cell in row))
        print()

    def count_live_neighbors(self, row, col):
        neighbors = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),           (0, 1),
            (1, -1),  (1, 0),  (1, 1)
        ]
        count = 0
        for dr, dc in neighbors:
            r, c = row + dr, col + dc
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def next_generation(self):
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.count_live_neighbors(r, c)
                if self.grid[r][c] == 1:
                    if live_neighbors < 2:
                        new_grid[r][c] = 0
                    elif live_neighbors in [2, 3]:
                        new_grid[r][c] = 1
                    else:
                        new_grid[r][c] = 0
                else:
                    if live_neighbors == 3:
                        new_grid[r][c] = 1
        self.grid = new_grid

    def run(self, generations=10, delay=0):
        import time
        for gen in range(generations):
            print(f"Generation {gen + 1}")
            self.display()
            self.next_generation()
            if delay:
                time.sleep(delay)
