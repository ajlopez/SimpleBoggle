
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
assert.ok(tree.s.p.a.m[''] !== undefined);

// Two words

var tree = simpleboggle.buildWordTree(['spam', 'spice']);
assert.ok(tree);
assert.ok(tree.s);
assert.ok(tree.s.p);
assert.ok(tree.s.p.a);
assert.ok(tree.s.p.a.m);
assert.ok(tree.s.p.a.m[''] !== undefined);
assert.ok(tree.s.p.i);
assert.ok(tree.s.p.i.c);
assert.ok(tree.s.p.i.c.e);
assert.ok(tree.s.p.i.c.e[''] !== undefined);

