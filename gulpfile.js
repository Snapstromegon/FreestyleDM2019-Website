const { task, series, src, dest, parallel, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rollup = require('rollup');
const g_clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const { terser } = require('rollup-plugin-terser');
const path = require('path');

async function buildJS() {
  const bundle = await rollup.rollup({
    input: './app/js/main.js',
    plugins: [terser()]
  });

  await bundle.write({
    dir: './dist/js',
    format: 'esm',
    sourcemap: true,
    sourcemapRoot: 'app'
  });
}

function buildCSS() {
  return src('app/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(dest('dist'));
}

function buildHTML() {
  return src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function buildImg() {
  return src('app/res/img/**')
    .pipe(imagemin())
    .pipe(dest('dist/res/img'));
}

function copyRes() {
  return src('app/{res/**,manifest.json,sw.js,robots.txt}')
    .pipe(dest('dist'));
}

function clean() {
  return src('dist', {read: false, allowEmpty: true})
      .pipe(g_clean());
}

function watchApp(){
  watch('app', exports.default);
}

exports.copyRes = copyRes;
exports.buildHTML = buildHTML;
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.clean = clean;
exports.buildImg = buildImg;
exports.watch = watchApp;
exports.default = series(clean, parallel(buildJS, buildCSS, buildHTML, buildImg, copyRes));
