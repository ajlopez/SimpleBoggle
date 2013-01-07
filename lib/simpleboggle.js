
'use strict';

var simpleboggle = (function () {
    function Board(width, height) {
        width = width || 4;
        height = height || width;

        var cells = Array(width);

        for (var k = 0; k < width; k++) {
            cells[k] = Array(height);
            for (var j = 0; j < height; j++)
                cells[k][j] = { neighbors: [], x: k, y: j };
        }

        for (var x = 0; x < width; x++)
            for (var y = 0; y < height; y++) {
                var cell = cells[x][y];

                for (var dx = -1; dx <= 1; dx++)
                    for (var dy = -1; dy <= 1; dy++) {
                        if (!dx && !dy)
                            continue;
                        var newx = x + dx;
                        var newy = y + dy;
                        if (newx < 0 || newx >= width || newy < 0 || newy >= height)
                            continue;
                        cell.neighbors.push(cells[newx][newy]);
                    }
            }
                    

        this.getWidth = function () { return width; };
        this.getHeight = function () { return height; };

        this.getCell = function (x, y) { return cells[x][y]; };

        this.setLetter = function (x, y, letter) { cells[x][y].letter = letter; };

        this.findLetter = function (letter) {
            var results = [];

            for (var x = 0; x < width; x++)
                for (var y = 0; y < height; y++) {
                    var cell = cells[x][y];
                    if (cell.letter == letter)
                        results.push(cell);
                }

            return results;
        }

        this.findWord = function (word) {
            var results = [];

            var firsts = this.findLetter(word[0]);

            firsts.forEach(function (cell) {
                var collect = [];
                find(cell, word, 1, [cell], collect);
                results = results.concat(collect);
            });
    
            return results;
        }

        this.findWords = function (tree) {
            var results = [];

            for (var x = 0; x < width; x++)
                for (var y = 0; y < height; y++) {
                    var cell = cells[x][y];
                    findWord(cell, tree, [], results);
                }
    
            return results;
        }

        function findWord(cell, tree, visited, collect) {
            if (visited.indexOf(cell) >= 0)
                return;

            var letter = cell.letter;
            if (!letter)
                return;
            if (tree[letter] === undefined)
                return;
            var newvisited = visited.slice();
            newvisited.push(cell);
            if (tree[letter][''] !== undefined)
                collect.push(newvisited);
            var newtree = tree[letter];
            cell.neighbors.forEach(function (newcell) {
                findWord(newcell, newtree, newvisited, collect);
            });
        }

        function find(cell, word, position, visited, collect) {
            if (position >= word.length)
                return;
                
            var letter = word[position];

            cell.neighbors.forEach(function (newcell) {
                if (newcell.letter !== letter)
                    return;
                if (visited.indexOf(newcell) >= 0)
                    return;

                var newvisited = visited.slice();
                newvisited.push(newcell);
                
                if (position + 1 >= word.length) {
                    collect.push(newvisited);
                    return;
                }

                find(newcell, word, position + 1, newvisited, collect);
            });
        }
    }

    function createBoard(width, height) {
        return new Board();
    }

    function buildWordTree(words) {
        var tree = { };

        words.forEach(function (word) {
            var node = tree;
            var n = word.length;

            for (var k = 0; k < n; k++) {
                var letter = word[k];
                var newnode = node[letter];
                if (newnode === undefined)
                    newnode = node[letter] = { };
                if (k + 1 == n)
                    newnode[''] = { };
                node = newnode;
            }
        });

        return tree;
    }

    return {
        createBoard: createBoard,
        buildWordTree: buildWordTree
    }
})();

if (typeof window === 'undefined') {
	module.exports = simpleboggle;
}
