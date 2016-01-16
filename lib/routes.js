Router.configure({
	layoutTemplate : "main"
});

Router.route("/", {
	name : "bigBoardContainer",
	template : "bigBoardContainer"
});

Router.route("/managePlayers", {
	name : "managePlayers",
	template : "managePlayers"
});

Router.route("/players/edit/:playerid", {
	name : "editPlayer",
	template : "editPlayer",
	data : function() {
		return Players.findOne({ _id : this.params.playerid });
	}
});