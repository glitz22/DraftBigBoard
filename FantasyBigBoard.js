if (Meteor.isClient) {
  Session.setDefault("playerFilter","All");
  Session.setDefault("playerPoolFilter","All");
  Session.setDefault("editState",false);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
