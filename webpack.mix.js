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

mix.js('resources/js/app.js', 'public/js')
    .sourceMaps(false, 'source-map')
    .browserSync(process.env.APP_URL)
    .sass('resources/sass/app.scss', 'public/css', {
        sassOptions: {
            importer: sassGlobImporter(),
        }
    })
    mix.copy('resources/images', 'public/images');
