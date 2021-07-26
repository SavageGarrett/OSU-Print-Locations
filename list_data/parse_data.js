const fs = require('fs');

let out_data = [];

try {
    // read contents of the file
    const data = fs.readFileSync('edited_list.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        console.log(line);
    });
} catch (err) {
    console.error(err);
}