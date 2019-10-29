const { series, parallel, src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const imagemin = require('gulp-imagemin');

const images = () => src('src/images/**/*').pipe(imagemin()).pipe(dest('public/images'));
const css = () => src('src/**/*.css').pipe(postcss()).pipe(dest('public'));
const others = () => src(['src/favicon.ico', 'src/index.html']).pipe(dest('public'));

exports.default = parallel(images, css, others);
