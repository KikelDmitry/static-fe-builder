'use strict';
export default {};

//CONFIG
export const config = {
	src: './src/',
	dest: './dest/',
};

export const globs = {
	pug: [config.src + 'pug/**/*.pug', '!' + config.src + 'pug/**/_*/*.pug'],
	scss: config.src + 'scss/main.scss',
	js: config.src + 'js/**/*.js',
	images: [
		config.src + 'img/**/*.{png,jpg,jpeg,svg,gif}',
		'!' + config.src + 'img/sprite/**/*.svg',
		'!' + config.src + 'img/icons/**/*.*',
	],
	sprite: config.src + 'img/sprite/**/*.svg',
	fonts: config.src + 'fonts/**/*.*',
};
