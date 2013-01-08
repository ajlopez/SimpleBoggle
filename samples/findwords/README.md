# Find Words Sample

Find English words in a board

## Installation

Via npm on Node:

```
npm install simpleboggle
```

## Usage

The arguments have the content of each row. Example:
```
node run rhre ypcs wnsn tego
```
The output is the list of found words. A word is repeated if it was found in more than one chain of dices.
```
we
went
ten
press
new
net
re
cs
cs
set
sent
so
son
get
go
no
on
once
```

It uses the module file `/lib/english.json` compiled running the sample `compilewords` over a list of word from
[scowl project](http://wordlist.sourceforge.net/). The word list
was taken from scowl.7.1, `final/english-words.10`, using `compilewords` sample. Acronyms were skipped. To do: compile
more words.



