document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = [];

    // Create the game board
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            squares.push(square);
            board.appendChild(square);
        }
    }

    // Initialize the game board with a solvable pattern
    generateSolvableBoard();

    // Function to toggle square state
    function toggleSquareState(square) {
        square.classList.toggle('is-off');
    }

    // Function to toggle the state of a square and its neighbors
    function toggleSquareAndNeighbors(square) {
        const index = squares.indexOf(square);
        const row = Math.floor(index / 5);
        const col = index % 5;

        toggleSquareState(square); // Toggle current square

        // Toggle adjacent squares
        const offsets = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const offset of offsets) {
            const newRow = row + offset[0];
            const newCol = col + offset[1];
            if (newRow >= 0 && newRow < 5 && newCol >= 0 && newCol < 5) {
                const neighborIndex = newRow * 5 + newCol;
                toggleSquareState(squares[neighborIndex]);
            }
        }
    }

    // Function to generate a solvable game board
    function generateSolvableBoard() {
        for (let i = 0; i < 25; i++) {
            if (Math.random() < 0.5) {
                toggleSquareAndNeighbors(squares[i]);
            }
        }
    }

    // Function to check if all squares are off (win condition)
    function checkWin() {
        return squares.every(square => square.classList.contains('is-off'));
    }

    // Event listener for square clicks
    board.addEventListener('click', function(event) {
        if (event.target.classList.contains('square')) {
            toggleSquareAndNeighbors(event.target);
            if (checkWin()) {
                window.alert('You win!');
            }
        }
    });
});
