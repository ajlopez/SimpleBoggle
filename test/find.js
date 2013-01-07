
var simpleboggle = require('../'),
    assert = require('assert');

// createBoard defined

var board = simpleboggle.createBoard();

// Find letter

board.setLetter(2, 2, 'A');
board.setLetter(2, 3, 'B');
board.setLetter(3, 3, 'B');

var cells = board.findLetter('Z');
assert.ok(cells);
assert.equal(cells.length, 0);
var cells = board.findLetter('A');
assert.ok(cells);
assert.equal(cells.length, 1);
cells.forEach(function (cell) { assert.equal(cell.letter, 'A'); });
var cells = board.findLetter('B');
assert.ok(cells);
assert.equal(cells.length, 2);
cells.forEach(function (cell) { assert.equal(cell.letter, 'B'); });

// Find word

var board = simpleboggle.createBoard();
board.setLetter(0, 0, 'S');
board.setLetter(0, 1, 'P');
board.setLetter(0, 2, 'A');
board.setLetter(0, 3, 'M');

var results = board.findWord('PIPE');
assert.ok(results);
assert.equal(results.length, 0);

var results = board.findWord('SPAM');
assert.ok(results);
assert.equal(results.length, 1);
assert.equal(results[0][0].x, 0);
assert.equal(results[0][0].y, 0);

var board = simpleboggle.createBoard();
board.setLetter(0, 0, 'P');
board.setLetter(0, 1, 'A');
board.setLetter(0, 2, 'P');
board.setLetter(0, 3, 'A');

var results = board.findWord('PA');
assert.ok(results);
assert.equal(results.length, 3);

board.setLetter(1, 0, 'A');
board.setLetter(1, 1, 'P');

var results = board.findWord('PA');
assert.ok(results);
assert.equal(results.length, 6);
