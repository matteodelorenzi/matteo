const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const sassGlobImporter = require('node-sass-glob-importer');

mix.js('resources/js/app.ts', 'public/js')
    .sourceMaps(false, 'source-map')
    .browserSync('127.0.0.1:8000')
    .sass('resources/sass/app.scss', 'public/css', {
        sassOptions: {
            importer: sassGlobImporter(),
        }
    });
