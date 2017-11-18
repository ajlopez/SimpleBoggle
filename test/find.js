
var simpleboggle = require('../');

exports['find letter'] = function (test) {
	var board = simpleboggle.createBoard();

	board.setLetter(2, 2, 'A');
	board.setLetter(2, 3, 'B');
	board.setLetter(3, 3, 'B');

	var cells = board.findLetter('Z');
	test.ok(cells);
	test.equal(cells.length, 0);
	var cells = board.findLetter('A');
	test.ok(cells);
	test.equal(cells.length, 1);
	cells.forEach(function (cell) { test.equal(cell.letter, 'A'); });
	var cells = board.findLetter('B');
	test.ok(cells);
	test.equal(cells.length, 2);
	cells.forEach(function (cell) { test.equal(cell.letter, 'B'); });
}

exports['find word'] = function (test) {
	var board = simpleboggle.createBoard();
	board.setLetter(0, 0, 'S');
	board.setLetter(0, 1, 'P');
	board.setLetter(0, 2, 'A');
	board.setLetter(0, 3, 'M');

	var results = board.findWord('PIPE');
	test.ok(results);
	test.equal(results.length, 0);

	var results = board.findWord('SPAM');
	test.ok(results);
	test.equal(results.length, 1);
	test.equal(results[0][0].x, 0);
	test.equal(results[0][0].y, 0);

	var board = simpleboggle.createBoard();
	board.setLetter(0, 0, 'P');
	board.setLetter(0, 1, 'A');
	board.setLetter(0, 2, 'P');
	board.setLetter(0, 3, 'A');

	var results = board.findWord('PA');
	test.ok(results);
	test.equal(results.length, 3);

	board.setLetter(1, 0, 'A');
	board.setLetter(1, 1, 'P');

	var results = board.findWord('PA');
	test.ok(results);
	test.equal(results.length, 6);	
}

