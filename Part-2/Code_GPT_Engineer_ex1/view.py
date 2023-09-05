class View:
    def __init__(self, game):
        self.game = game
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT), 0, 32)
        self.surface = pygame.Surface(self.screen.get_size())
        self.surface = self.surface.convert()

    def draw(self):
        self.surface.fill((0,0,0))
        self.game.snake.draw(self.surface)
        self.game.food.draw(self.surface)
        self.screen.blit(self.surface, (0,0))
