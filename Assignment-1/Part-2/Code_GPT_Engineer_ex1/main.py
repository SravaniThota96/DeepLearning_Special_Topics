def main():
    pygame.init()
    clock = pygame.time.Clock()
    game = Game()
    controller = Controller(game)
    view = View(game)

    while True:
        controller.get_key_press()
        game.update()
        view.draw()
        if game.is_game_over():
            pygame.quit()
            sys.exit()
        pygame.display.update()
        clock.tick(60)

if __name__ == "__main__":
    main()
