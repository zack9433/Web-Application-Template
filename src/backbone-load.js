// Filename: libs/backbone/backbone-load.js
 // Finally lets load the original backbone source code
define(['order!../assets/js/backbone/backbone-min'], function(){
  // Now that all the orignal source codes have ran and accessed each other
  // We can call noConflict() to remove them from the global name space
  // Require.js will keep a reference to them so we can use them in our modules
  $.noConflict();
  _.noConflict();
  return Backbone.noConflict();
});