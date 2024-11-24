# Tic-Tac-Toe Game
<img width="388" alt="image" src="https://github.com/user-attachments/assets/28aa9f3d-138d-422d-a021-d665dd097199">

This is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows you to play against the computer, where the computer uses a basic algorithm to try and make you lose. It's a great project for practicing JavaScript skills, especially with DOM manipulation and event handling.

## Features

- 3x3 Tic-Tac-Toe grid.
- Player vs Computer gameplay.
- Computer uses an algorithm to prevent the player from winning easily.
- Restart button that reloads the game when clicked.
- Displays a message when the game ends (either Player or Computer wins).

## How It Works

1. **Grid Setup**: A 3x3 grid is created using HTML, where each cell corresponds to an element in the JavaScript array `myGrid`.
2. **Player Move**: When the player clicks a grid cell, the game checks if the cell is empty. If it is, the cell is updated with an "X" and the computer's turn follows.
3. **Computer Move**: The computer checks if it can win or if the player is about to win. If not, it makes a random move.
4. **Winning Check**: The game checks for a winner by summing the values in each row, column, and diagonal. The first player to get three in a row wins.
5. **Restart Button**: When the game ends, the reload button appears, allowing the user to restart the game by reloading the page.

## Technologies Used

- **HTML**: For structure and layout.
- **CSS**: For styling the grid and buttons.
- **JavaScript**: For game logic, including event handling and DOM manipulation.

## Installation

You can easily run the game locally by following these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. Open the `index.html` file in your web browser to play the game.

## How to Play

1. Click on any empty grid cell to place your "X".
2. The computer will automatically make its move, placing an "O".
3. The game will notify you when someone wins.
4. Press the **Restart** button to play again.

## Contributing

Feel free to fork the project and submit pull requests. If you encounter any bugs or have ideas for improvements, please open an issue.
