class Controller:
    def __init__(self, game):
        self.game = game
        self.keys = {
            K_UP: (0,-1),
            K_DOWN: (0,1),
            K_LEFT: (-1,0),
            K_RIGHT: (1,0)
        }

    def get_key_press(self):
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == KEYDOWN:
                if event.key in self.keys:
                    self.game.snake.turn(self.keys[event.key])
