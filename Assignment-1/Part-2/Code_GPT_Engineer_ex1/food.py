class Food:
    def __init__(self):
        self.position = (0,0)
        self.color = (0,255,0)
        self.randomize_position()

    def randomize_position(self):
        self.position = (random.randint(0, GRID_WIDTH-1)*GRIDSIZE, random.randint(0, GRID_HEIGHT-1)*GRIDSIZE)

    def draw(self, surface):
        draw_box(surface, self.color, self.position)
