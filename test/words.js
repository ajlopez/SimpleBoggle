
var simpleboggle = require('../'),
    assert = require('assert');

// build Word Tree

assert.ok(simpleboggle.buildWordTree);
assert.equal(typeof simpleboggle.buildWordTree, 'function');

// One word

var tree = simpleboggle.buildWordTree(['spam']);
assert.ok(tree);
assert.ok(tree.s);
assert.ok(tree.s.p);
assert.ok(tree.s.p.a);
assert.ok(tree.s.p.a.m);
assert.ok(tree.s.p.a.m.$ !== undefined);

// Two words

var tree = simpleboggle.buildWordTree(['spam', 'spice']);
assert.ok(tree);
assert.ok(tree.s);
assert.ok(tree.s.p);
assert.ok(tree.s.p.a);
assert.ok(tree.s.p.a.m);
assert.ok(tree.s.p.a.m.$ !== undefined);
assert.ok(tree.s.p.i);
assert.ok(tree.s.p.i.c);
assert.ok(tree.s.p.i.c.e);
assert.ok(tree.s.p.i.c.e.$ !== undefined);

// Find word

var board = simpleboggle.createBoard();
board.setLetter(0, 0, 's');
board.setLetter(0, 1, 'p');
board.setLetter(0, 2, 'a');
board.setLetter(0, 3, 'm');

var results = board.findWords(tree);
assert.ok(results);
assert.equal(results.length, 1);

board.setLetter(1, 1, 'i');
board.setLetter(2, 1, 'c');
board.setLetter(3, 1, 'e');

var results = board.findWords(tree);
assert.ok(results);
assert.equal(results.length, 2);

var word = simpleboggle.chainToString(results[0]);
assert.ok(word === 'spam' || word === 'spice');
var word = simpleboggle.chainToString(results[1]);
assert.ok(word === 'spam' || word === 'spice');
