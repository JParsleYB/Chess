# My Chess

## PLAN:

* menu
    - [ ] play with computer
    - [ ] play online
    - [ ] debug mode

* functionable chessboard 
    - ✅ recreating a chessboard look
    - [ ] selecting squares

* queue
    - [ ] queue blocking after player's move and handing over to the opponent
    - [ ] implementing a clock
    - [ ] automatically stopping the clock after the move and unlocking the possibility of the opponent's move

* chess pieces and moves

    All:
    - [ ] blocking movement if another friendly piece is within range of the piece

    King:
    - [ ] moves one square in each direction
    - [ ] moves two or three squares when castling
    - [ ] blocking the ability to move to squares that lead to check

    Queen:
    - [ ] moves diagonally and in straight lines
    
    Rook:
    - [ ] moves only in straight lines

    Bishop:
    - [ ] moves only diagonally

    Knight:
    - [ ] moves only to the last square in simple "L" pattern

    Pawn:
    - [ ] on start position moves one or two squares, after first move, it always moves one square
    - [ ] moves only forward
    - [ ] when any piece of the opponent stands diagonally in front of the pawn, it allows you to capture the piece
    - [ ] blocking forward movement when facing a piece