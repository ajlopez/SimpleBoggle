
var simpleboggle = require('../..'),
    fs = require('fs');

var args = process.argv.slice(2);
var nargs = args.length;

var board = simpleboggle.createBoard(nargs, nargs);

for (var y = 0; y < nargs; y++) {
    var arg = args[y].toLowerCase();
    var l = arg.length;

    for (var x = 0; x < nargs; x++)
        board.setLetter(x, y, arg[x]);
}

var tree = JSON.parse(fs.readFileSync('../../lib/english.json').toString());

var list = board.findWords(tree);

list.forEach(function(cells) {
    console.log(simpleboggle.cellsToWord(cells));
});
