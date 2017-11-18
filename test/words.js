
var simpleboggle = require('../');

exports['build word tree'] = function (test) {
	test.ok(simpleboggle.buildWordTree);
	test.equal(typeof simpleboggle.buildWordTree, 'function');
}

exports['one word'] = function (test) {
	var tree = simpleboggle.buildWordTree(['spam']);
	test.ok(tree);
	test.ok(tree.s);
	test.ok(tree.s.p);
	test.ok(tree.s.p.a);
	test.ok(tree.s.p.a.m);
	test.ok(tree.s.p.a.m.$ !== undefined);
}

exports['two words'] = function (test) {
	var tree = simpleboggle.buildWordTree(['spam', 'spice']);

	test.ok(tree);
	test.ok(tree.s);
	test.ok(tree.s.p);
	test.ok(tree.s.p.a);
	test.ok(tree.s.p.a.m);
	test.ok(tree.s.p.a.m.$ !== undefined);
	test.ok(tree.s.p.i);
	test.ok(tree.s.p.i.c);
	test.ok(tree.s.p.i.c.e);
	test.ok(tree.s.p.i.c.e.$ !== undefined);
}

exports['find word'] = function (test) {
	var board = simpleboggle.createBoard();
	var tree = simpleboggle.buildWordTree(['spam', 'spice']);

	board.setLetter(0, 0, 's');
	board.setLetter(0, 1, 'p');
	board.setLetter(0, 2, 'a');
	board.setLetter(0, 3, 'm');

	var results = board.findWords(tree);
	test.ok(results);
	test.equal(results.length, 1);

	board.setLetter(1, 1, 'i');
	board.setLetter(2, 1, 'c');
	board.setLetter(3, 1, 'e');

	var results = board.findWords(tree);
	test.ok(results);
	test.equal(results.length, 2);

	var word = simpleboggle.cellsToWord(results[0]);
	test.ok(word === 'spam' || word === 'spice');
	var word = simpleboggle.cellsToWord(results[1]);
	test.ok(word === 'spam' || word === 'spice');
}

