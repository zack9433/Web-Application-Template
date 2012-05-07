/*!
 * Filename: app.js
 *
 * app.js allows us to initialize our application
 *
 * Date: 2012/04/02 PM 10:30
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'router' // Request router.js
], function($, _, Backbone, Router){

  var MyApp = {};

  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }

  // Event aggregator at application level
  MyApp.vent = _.extend( {}, Backbone.Events );
  MyApp.initialize = initialize;
  window.MyApp = MyApp;

  return MyApp;
});
