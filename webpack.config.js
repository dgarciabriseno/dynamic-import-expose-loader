const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: ['./src/index.js', './src/exposed_class.js'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            use: [
                {
                    loader: "expose-loader",
                    options: {
                      exposes: [
                        {
                            globalName: "ExposedClass",
                            moduleLocalName: "ExposedClass",
                            override: true
                        },
                      ]
                    }
                },
            ]
        }
      ]
  }
};
