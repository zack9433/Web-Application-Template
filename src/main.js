/*!
 * Filename: main.js
 *
 * main.js allows us to configure path and initialize Application.
 *
 * Date: 2012/04/02 PM 10:30
 */
require.config({
  paths: {
    jquery: '../assets/js/jquery/jquery-1.7.2.min',
    underscore: 'underscore-load',
    backbone: 'backbone-load',
    order: '../assets/js/require/plugin/order',
    text: '../assets/js/require/plugin/text',
    tpl: '../assets/js/require/plugin/tpl',
    templates: 'templates'
  }
});

require([

  // Load our app module and pass it to our definition function
  'app',
  '../assets/js/jquery/jquery-1.7.2.min',
  // Some plugins have to be loaded in order due to there non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
  'order!../assets/js/underscore/underscore-min',
  'order!../assets/js/backbone/backbone-min'

], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});