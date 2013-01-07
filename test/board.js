
var simpleboggle = require('../'),
    assert = require('assert');

// createBoard defined

assert.ok(simpleboggle.createBoard);
assert.equal(typeof simpleboggle.createBoard, 'function');

// Create Board

var board = simpleboggle.createBoard();
assert.ok(board);
assert.equal(board.getWidth(), 4);
assert.equal(board.getHeight(), 4);

