const assert = require('assert');
const brackets = require('../index.js');

// import replaceBrackets from '../index.js';

describe('Array', function () {
    describe('#indexOf()', function () {

        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('right javascript replacement', function () {
            let str = '[Programming [langu[age]]] is the most popular programming language [today]';
            let substr = 'Javascript';

            let right = 'Javascript is the most popular programming language [today]';
            let guess = brackets.replace(str, substr);

            assert.equal(guess, right);
        });

        it('single middle replacement', function () {
            let str = 'Down, down, [move]. Would the fall NEVER come to an end!';
            let substr = 'down';

            let right = 'Down, down, down. Would the fall NEVER come to an end!';
            let guess = brackets.replace(str, substr);

            assert.equal(guess, right);
        });

        it('nothing to replace', function () {
            let str = 'The Dormouse had closed its eyes by this time, and was going off into a doze';
            let substr = 'Alice';

            let right = 'The Dormouse had closed its eyes by this time, and was going off into a doze';
            let guess = brackets.replace(str, substr);

            assert.equal(guess, right);
        });

        it('no letters between brackets', function () {
            let str = '[[[[[[[[[[[[[[[[dah]]]]]]]]]]]]]]]]';
            let substr = 'It was the BEST butter';

            let right = 'It was the BEST butter';
            let guess = brackets.replace(str, substr);

            assert.equal(guess, right);
        });

    });
});
