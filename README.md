 <!-- Nishon Rad's Tic Tac Toe Project WDI GA BOSTON



Nishon Rad's Tic Tac Toe

http://imgur.com/NME1h0k - Wire Frame


Technologies used
-html
-css
-javascript
-jquery
-AJAX
-scess
-bootstrap-sass
-github
-git

User Stories -

-As a user I want to be able to play a game of tic tac
 toe against a friend who is using the same computer.

-As a user I want to be able to reset the board so I
can play multiple games without having to sign in and out.

-As a user I want the game to be able to find the
arrays of old games I remember the ID of.

-As an admin I want users to be able to change their password.

I started off my getting my html and css working so
that I had a good visual represenation of a standard
tic-tac-toe board. From there I moved to set up
authentication and then the game board logic. I finished
up by figuring out my PATCH to the server and then
doing my GET request for a game.

During the development of my project I encountered a my
fair share of problems. At first I tried creating click
handlers for each div and each x and o along with
corresponding functions to support them. I quickly
found this to be extremely inefficient. I then refocused
 and figured out how to pass the ID of the cells through
the click handler into my functions, making the process
far more efficient.

In additon to efficiency I had issues creating the
patch element to update my board. This was because
I was attaching app.game.token to my Authorization
 when it should have been app.user.token


Something that I will be more careful about in my next project
would be to not spend too much time on one problem.
It is good to step away from the computer for a bit and
work on another task to give yourself a break.

In the upcoming days I would like to make my site more
responsive. -->
