/* global Meteor */
if (Meteor.isClient) {
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();


    // https://atmospherejs.com/etjana/instafeed
    var feed = new Instafeed({
        get: 'user',
        userId: YOUR_USER_ID,
        accessToken: 'YOUR_ACCESS_TOKEN'        
    });
    feed.run();

  }); 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
