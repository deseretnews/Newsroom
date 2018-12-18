const interactives = require('./interactives.json');
const path = require(`path`);

let entries = {};
Object.keys(interactives).forEach(uid => {
    entries[uid] = `./src/${uid}/app.source.js`
});

module.exports = {
    entry: entries,
    devtool: "source-maps",
    mode: `production`,
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `./[name].min.js`
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'raw-loader'
        }, {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};