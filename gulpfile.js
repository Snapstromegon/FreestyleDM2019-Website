const { series, src, dest, parallel } = require('gulp');
// const rollup = require('gulp-rollup');
const rollup = require('rollup');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const { terser } = require('rollup-plugin-terser');

async function buildJS() {
  const bundle = await rollup.rollup({
    input: './app/js/main.js',
    plugins: [terser()]
  });

  await bundle.write({
    dir: './dist/js',
    format: 'esm'
  });
}

function buildCSS() {
  return src('app/**/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'));
}

function buildHTML() {
  return src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function copyRes() {
  return src('app/{res/**,manifest.json}')
    .pipe(dest('dist'));
}

function cleanDist() {
  return src('dist', {read: false})
      .pipe(clean());
}

exports.copyRes = copyRes;
exports.buildHTML = buildHTML;
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.cleanDist = cleanDist;
exports.default = series(cleanDist, parallel(buildJS, buildCSS, buildHTML, copyRes));
