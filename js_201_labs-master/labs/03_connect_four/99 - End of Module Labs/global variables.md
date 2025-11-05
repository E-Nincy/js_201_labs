# Try to elminiate global variables

Populating the global namespace of your JavaScript thread is generally a bad idea. As your project grows, it becomes easier and easier to accidentally overwrite variables. These kind of bugs can be a nightmare to debug.

As a fix to this, try and keep all global level variables to a minimum, one suggested approach is to have a handful of variables that are objects:

```js
const CONFIG = {
    boardSize = 10
}

const GAME_STATE = {
    board = buildBoard(CONFIG.boardSize),
    turn = 1
}
```

Make this change in your project and make sure everything is working.

Do this in a separate branch, make a pull request and let your mentor know when you are done.
