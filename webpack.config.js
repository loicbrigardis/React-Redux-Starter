module.exports = {
    entry: "./public/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
          }
          },
          {
              exclude: /(node_modules)/,
              test: /\.scss$/,
              loaders: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
    },
    watch: true
}
