/*!
 * Filename: router.js
 *
 * router.js allows us to configure navigation and initialize our views.
 *
 * Date: 2012/04/02 PM 10:30
 */
define([
  'jquery',
  'underscore',
  'backbone'
], function( $, _, Backbone ){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'home'
      // Default
      '*notfound': 'pageNotFound'
    },

    pageNotFound: function(actions){
      // console.log('No route:', actions);
      // Display the main page.
    },

    home: function( ) {

    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
