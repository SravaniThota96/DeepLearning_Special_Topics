Based on the requirements and assumptions, we will need the following core classes, functions, and methods:

1. `Snake` class in `snake.py`: This will represent the snake in the game. It will have methods for moving the snake, growing the snake, and checking if the snake has collided with itself.

2. `Food` class in `food.py`: This will represent the food in the game. It will have a method for placing the food at a random location within the grid.

3. `Game` class in `game.py`: This will represent the game itself. It will use instances of the `Snake` and `Food` classes and will have methods for starting the game, handling game over, and updating the game state.

4. `Controller` class in `controller.py`: This will handle user inputs. It will have methods for getting the current key press and updating the direction of the snake accordingly.

5. `View` class in `view.py`: This will handle the game's graphical representation. It will have methods for drawing the grid, the snake, and the food.

6. `main.py`: This will be the entry point of the application. It will create instances of the `Game`, `Controller`, and `View` classes and will contain the main game loop.

Now, let's write the code for each file.

`requirements.txt`
