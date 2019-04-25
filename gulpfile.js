const { src, dest, parallel } = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

function html() {
	return src('src/*.html')
		.pipe(dest('public/'));
}

function assets() {
	return src('src/assets/*.png')
		.pipe(dest('public/assets/'));
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
			                {loader:'css-loader', options:{url:false}},
			                "sass-loader"
			            ]
			        },
			        {
						test: /\.(jpe?g|png|gif|svg)$/i,
						use: [
							'url-loader?limit=10000',
							'img-loader'
						]
					}
				]
			}
		}))
		.pipe(dest('public/'));
}

exports.default = parallel(htaccess, html, assets, js);









