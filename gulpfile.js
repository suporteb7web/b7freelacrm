const { src, dest, parallel } = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

function html() {
	return src('src/*.html')
		.pipe(dest('public/'));
}

function htaccess() {
	return src('src/.htaccess')
		.pipe(dest('public/'));
}

function js() {
	return src('src/index.js')
		.pipe(named())
		.pipe(webpack({
			mode:'production',
			output:{
				filename:'[name].js'
			},
			module:{
				rules:[
					{
						test:/\.(js|jsx)$/,
						use: {
							loader:'babel-loader',
							options:{
								presets:['@babel/preset-env', '@babel/preset-react']
							}
						}
					},
					{
			            test: /\.scss$/,
			            use: [
			                "style-loader",
			                "css-loader",
			                "sass-loader"
			            ]
			        }
				]
			}
		}))
		.pipe(dest('public/'));
}

exports.default = parallel(htaccess, html, js);









