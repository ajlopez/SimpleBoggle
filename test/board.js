
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

// Get cell

var cell = board.getCell(0, 0);
assert.ok(cell);
assert.equal(cell.x, 0);
assert.equal(cell.y, 0);
assert.equal(cell.letter, undefined);
assert.ok(cell.neighbors);
assert.equal(cell.neighbors.length, 3);

var cell = board.getCell(1, 1);
assert.ok(cell);
assert.equal(cell.x, 1);
assert.equal(cell.y, 1);
assert.equal(cell.letter, undefined);
assert.ok(cell.neighbors);
assert.equal(cell.neighbors.length, 8);

var cell = board.getCell(0, 1);
assert.ok(cell);
assert.equal(cell.letter, undefined);
assert.ok(cell.neighbors);
assert.equal(cell.neighbors.length, 5);

var cell = board.getCell(0, 2);
assert.ok(cell);
assert.equal(cell.letter, undefined);
assert.ok(cell.neighbors);
assert.equal(cell.neighbors.length, 5);

var cell = board.getCell(0, 3);
assert.ok(cell);
assert.equal(cell.letter, undefined);
assert.ok(cell.neighbors);
assert.equal(cell.neighbors.length, 3);

// Set letter

board.setLetter(2, 2, 'A');
var cell = board.getCell(2, 2);
assert.equal(cell.letter, 'A');

// Create board with other size

var board = simpleboggle.createBoard(2, 3);
assert.ok(board);
assert.equal(board.getWidth(), 2);
assert.equal(board.getHeight(), 3);
