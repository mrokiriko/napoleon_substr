const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('type in your string: ', str => {
    readline.question('type in your substring to replace brackets with: ', substr => {
        console.log('>>', replace(str, substr));

        readline.close();
    });
});

function replace(str, substr) {

    let answer = '';

    let remove_brackets_mode = false;
    let brackets_count = 0;
    for (let i = 0; i < str.length; i++) {

        let c = str[i];

        if (remove_brackets_mode && (c === '[' || c === ']')) {

            brackets_count += (c === '[') ? 1 : -1;

            if (brackets_count === 0) {
                answer += substr + str.substr(i + 1);
                break;
            }
        }

        if (!remove_brackets_mode) {
            if (c === '[') {
                remove_brackets_mode = true;
                brackets_count = 1;
            } else {
                answer += c;
            }
        }
    }

    return answer;
}

module.exports = {replace};