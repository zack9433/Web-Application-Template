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
    underscore: '../assets/js/underscore/underscore-min',
    backbone: '../assets/js/backbone/backbone-min',
    tpl: '../assets/js/require/plugin/tpl',
    domReady: '../assets/js/require/plugin/domReady',
    baseView: '../src/views/baseView',
    templates: 'templates'
  }
});

require([

  // Load our app module and pass it to our definition function
  'app',
  'domReady',
  'jquery'

], function(App, domReady){
  //This function is called once the DOM is ready.
  //It will be safe to query the DOM and manipulate
   //DOM nodes in this function.
  domReady(function () {
    // The "app" dependency is passed in as "App"
    App.initialize();
  });
});
