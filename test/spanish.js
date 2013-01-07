
var simpleboggle = require('../'),
    assert = require('assert');

// build Spanish syllables
// http://www.spanish.hku.hk/SILABA.htm

// http://stackoverflow.com/questions/500606/javascript-array-delete-elements
// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

// My addition

Array.prototype.removeItem = function(item) {
    var index = this.indexOf(item);
    if (index >= 0)
        return this.remove(index);
    return this;
};

var parts = [];

var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
var vstrong = [ 'a', 'e', 'o' ];
var vweak = [ 'i', 'u' ];

var consonants = [];

var endings = [ 'm', 'n', 'r', 'l', 'd' ];

var nletters = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
var acode = 'a'.charCodeAt(0);

for (var k = 0; k < nletters; k++) {
    var letter = String.fromCharCode(acode + k);
    if (vowels.indexOf(letter) < 0)
        consonants.push(letter);
}

var cfirst = consonants.slice();
cfirst.removeItem('h');
cfirst.removeItem('j');
cfirst.removeItem('l');
cfirst.removeItem('m');
cfirst.removeItem('n');
cfirst.removeItem('q');
cfirst.removeItem('r');
cfirst.removeItem('s');
cfirst.removeItem('w');
cfirst.removeItem('x');
cfirst.removeItem('y');
cfirst.removeItem('z');
var csecond = [ 'l', 'r' ];

var biconsonants = [];

for (var k = 0; k < cfirst.length; k++)
    for (var j = 0; j < csecond.length; j++)
        biconsonants.push(cfirst[k] + csecond[j]);

biconsonants.push('ll');
biconsonants.push('rr');
biconsonants.push('ch');

biconsonants.removeItem('dl');

var dipthongs = [];
var tripthongs = [];

for (var k = 0; k < vweak.length; k++)
    for (var j = 0; j < vweak.length; j++)
        if (k != j) {
            var dipthong = vweak[k] + vweak[j];
            dipthongs.push(dipthong);
        }

for (var k = 0; k < vweak.length; k++)
    for (var j = 0; j < vstrong.length; j++) {
            var dipthong = vweak[k] + vstrong[j];
            dipthongs.push(dipthong);
            dipthong = vstrong[j] + vweak[k];
            dipthongs.push(dipthong);
            for (var i = 0; i < vweak.length; i++)
                tripthongs.push(vweak[k] + vstrong[j] + vweak[i]);
            tripthongs.push(vweak[k] + vstrong[j] + 'y');
    }

// 'ou' is nto a dipthong
// see http://www.spanish.hku.hk/SILABA.htm
dipthongs.removeItem('ou');

assert.equal(dipthongs.length, 13);

dipthongs.push('ay');
dipthongs.push('ey');
dipthongs.push('oy');
dipthongs.push('uy');

assert.ok(tripthongs.length);

var syllables = [];

syllables = syllables.concat(vowels);
syllables = syllables.concat(dipthongs);
syllables = syllables.concat(tripthongs);

var ls = syllables.length;
var lc = consonants.length;
var lbc = biconsonants.length;

for (var k = 0; k < ls; k++) {
    for (var j = 0; j < lc; j++)
        syllables.push(consonants[j] + syllables[k]);
    for (var j = 0; j < lbc; j++)
        syllables.push(biconsonants[j] + syllables[k]);
}

ls = syllables.length;
var le = endings.length;

for (var k = 0; k < ls; k++)
    for (var j = 0; j < le; j++)
        syllables.push(syllables[k] + endings[j]);

for (var k = 0; k < vowels.length; k++)
    assert.ok(syllables.indexOf(vowels[k]) >= 0);

assert.ok(syllables.indexOf('da') >= 0);
assert.ok(syllables.indexOf('dra') >= 0);
assert.ok(syllables.indexOf('dla') < 0);
assert.ok(syllables.indexOf('dad') >= 0);
assert.ok(syllables.indexOf('mal') >= 0);
assert.ok(syllables.indexOf('man') >= 0);
assert.ok(syllables.indexOf('in') >= 0);
assert.ok(syllables.indexOf('im') >= 0);
assert.ok(syllables.indexOf('mra') < 0);
assert.ok(syllables.indexOf('mla') < 0);
assert.ok(syllables.indexOf('cha') >= 0);
assert.ok(syllables.indexOf('lla') >= 0);
assert.ok(syllables.indexOf('llan') >= 0);
assert.ok(syllables.indexOf('rre') >= 0);
