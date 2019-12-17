const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'www'),
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: 'svelte-loader',
        options: {
          emitCss: true,
          hotReload: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
