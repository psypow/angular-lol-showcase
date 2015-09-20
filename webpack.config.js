var path = require('path');

module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path: __dirname
    },
    module: {
        preLoaders: [],
        loaders: [
            {test: /\.js$/, loader: 'babel', include:[path.resolve(process.cwd(), 'src')]},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.json$/, loader: 'json'},
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" }
        ],
        postLoaders: []
    }
};