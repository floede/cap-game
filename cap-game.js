if (Meteor.isClient) {
  $(function(){
    console.log("TEST TEST");
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
