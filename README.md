game-of-life
============

Conway's Game of Life solver.

Usage:
------

```
import GameOfLife from 'game-of-life-solver'

const board =
    {
      numrows: 3,
      numcols: 3,
      aliveCoords: {
        0: {0: null},
        1: {0: null, 1: null}, // {y: {x1: null, x2: null ...}}
        2: {2: null}
      },
      alive: 4
    };


let gol = new GameOfLife(board)

gol.nextGeneration()
gol.nextGeneration()

let {alive, aliveCoords} = gol.board
```


Requirements:
-------------
* node ^5.6
* npm ^3.6


Install:
--------

```
npm install game-of-life-solver
```

License:
--------
MIT

Author:
-------
Bao Pham
