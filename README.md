# Naməlum-Kommunist


A fan-made web adaptation of [Secret Hitler](https://www.secrethitler.com), a social deduction board game for up to 10 players by Goat, Wolf & Cabbage. You can play it with friends at [namelumkommunist.netlify.app/](https://namelumkommunist.netlify.app/)!

### The Game
In the game, players are divided into Liberals, Fascists, and one secret Hitler. The Liberals must work together (or not) to discover the secret Hitler hiding in their midst, all while the Fascists try to elevate the secret Hitler to power. Pass policies to achieve victory and unlock presidential powers to investigate your friends. 

Can you find and stop the Secret Hitler?

### How to Play: 
Go to [namelumkommunist.netlify.app](https://namelumkommunist.netlify.app/) and open a new lobby! Use the lobby's code or the provided link to invite your friends. You can play with up to 10 players at once!

There are instructions on how to play the game provided on the website, and plenty of helpful tips are provided for first-time players. The game takes care of rules for you, making it easy to pick up and play. 

## About this project
### Technical Details
The Java server is divided into the [game simulation](src/main/java/game) and the [REST API](src/main/java/server). Communication between the server and client is done via websocket and HTTP requests, using the [Javalin library](https://javalin.io/).

The [webpage](/secret-hitler-online-interface) is written in [React](https://reactjs.org/), and features animations created with CSS. Assets were either adapted from the original board game or created using [Inkscape](https://inkscape.org/).
