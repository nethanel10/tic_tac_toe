# tic_tac_toe
# html and css 
I create the board with html and css.
the game build with container  div that contain the board div . 
the board div contain label that present the tme and  9 qube divs 
under the label has a h1 title that present the feedback: the turn of the  player one or player two , who is the winner. and if has draw.
under to feedback will be a button that restart the game
style of container: the style of container is flex and colmn 
style of board:the board style as display:grid  and  the  board will be in center .
the color of the board is green. 
style of qube: the color of the qubes is white.
# javascript 
At the first I create the bord as a array .
# The  name of the first function is initGame that init the first player turn.
# the name of the seconde function is turn that give the turn to current player.
# the name of the third function is updateBoard that:
  *   change the board by the selected pos
  *   bind the next move to the opposite player
  *   change the feedback to the opposite player turn.
 # the name of the foruth function is statusChecker that contain:
 * the winningTemplates as a array 
 * for loop that over the winningTemplates array and cheeck win . 
    (win=if one index of winningTemplates array  is true).
 * forEach loop that over the board and check if is draw.
# the name of the six function is announce  that  contain  a Switch Statement  
that print the status  in feedback line (status=0: draw; status=1: player 1 won ; status=2: player2 won )
# the name of the seven function is endGame - that end the game after winning
# the name of egiht function is restart- that restart the game whene I clicked the restart button
# the name of nine function is clockInit-  that set a new timer 
# the name of ten function is setTime- that set the secondes and minutes in the timer 
# the name of eleven function is pad-which can take a value and pad it to a given length
# the name of twilve function is clearTimeouts that reset the timeout to 00:00.

  




