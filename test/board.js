
var simpleboggle = require('../');

exports['createBoard defined'] = function (test) {
	test.ok(simpleboggle.createBoard);
	test.equal(typeof simpleboggle.createBoard, 'function');
}

exports['create board'] = function (test) {
	var board = simpleboggle.createBoard();
	test.ok(board);
	test.equal(board.getWidth(), 4);
	test.equal(board.getHeight(), 4);
}

exports['get cell'] = function (test) {
	var board = simpleboggle.createBoard();

	var cell = board.getCell(0, 0);
	test.ok(cell);
	test.equal(cell.x, 0);
	test.equal(cell.y, 0);
	test.equal(cell.letter, undefined);
	test.ok(cell.neighbors);
	test.equal(cell.neighbors.length, 3);

	var cell = board.getCell(1, 1);
	test.ok(cell);
	test.equal(cell.x, 1);
	test.equal(cell.y, 1);
	test.equal(cell.letter, undefined);
	test.ok(cell.neighbors);
	test.equal(cell.neighbors.length, 8);

	var cell = board.getCell(0, 1);
	test.ok(cell);
	test.equal(cell.letter, undefined);
	test.ok(cell.neighbors);
	test.equal(cell.neighbors.length, 5);

	var cell = board.getCell(0, 2);
	test.ok(cell);
	test.equal(cell.letter, undefined);
	test.ok(cell.neighbors);
	test.equal(cell.neighbors.length, 5);

	var cell = board.getCell(0, 3);
	test.ok(cell);
	test.equal(cell.letter, undefined);
	test.ok(cell.neighbors);
	test.equal(cell.neighbors.length, 3);	
}

exports['set letter'] = function (test) {
	var board = simpleboggle.createBoard();

	board.setLetter(2, 2, 'A');
	var cell = board.getCell(2, 2);
	test.equal(cell.letter, 'A');
}
	
exports['create board with other size'] = function (test) {
	var board = simpleboggle.createBoard(2, 3);
	test.ok(board);
	test.equal(board.getWidth(), 2);
	test.equal(board.getHeight(), 3);
}

