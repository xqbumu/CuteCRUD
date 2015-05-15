var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.rubySass('app.scss', 'public/build/css')
        .scripts([
            // jQuery
            'jquery.js',

            // Bootstrap
            'bootstrap/affix.js',
            'bootstrap/alert.js',
            'bootstrap/button.js',
            'bootstrap/carousel.js',
            'bootstrap/collapse.js',
            'bootstrap/dropdown.js',
            'bootstrap/modal.js',
            'bootstrap/scrollspy.js',
            'bootstrap/tab.js',
            'bootstrap/transition.js',
            'bootstrap/tooltip.js',
            'bootstrap/popover.js',

            // Bootstrap-Table
            'bootstrap-table/bootstrap-table.js',
            'bootstrap-table/bootstrap-table-zh-CN.js',

            // Some Help methods
            'methods.js',

            // jQuery-ujs
            'plugins/jquery-ujs.js',

        ], 'public/build/js/app.js', 'resources/assets/js')
});
