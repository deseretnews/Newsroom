import guid from './guid';
import fs from 'fs';

const UID = guid();
const PATH = `./src/${UID}`;

const print = (dir) => console.log(`\x1b[33mNEWSROOM:\x1b[0m ${UID}/${dir}`);
const generate = (name, ext) => {
    fs.readFile(`./temps/${name}.temp.${ext}`, (err, source) => {
        if (!err) {
            const file = `${name}.source.${ext}`;
            source = source.toString().replace(new RegExp(`uid`, `g`), UID);
            fs.writeFile(`${PATH}/${file}`, source, (err) => {
                if (err) return print(err);
                else print(file);
            });
        } else {
            print(err)
        }
    });
}

if (!fs.existsSync(PATH)) {
    fs.mkdirSync(PATH);
    // generate files
    print('');
    generate(`app`, `js`);
    generate(`style`, `scss`);
    generate(`markup`, `html`);
    generate(`data`, `js`);
    // update json
    fs.readFile(`./interactives.json`, (err, source) => {
        if (!err) {
            source = JSON.parse(source);
            source[UID] = {};
            source[UID].created = new Date();
            source[UID].alias = null;
            source = JSON.stringify(source);
            fs.writeFile(`./interactives.json`, source, (err) => {
                if (err) print(err);
            });
        } else {
            print(err);
        }
    });
} else {
    print(`Could not create new interactive, try again.`);
}