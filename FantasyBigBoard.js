if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault("playerFilter","All");
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
