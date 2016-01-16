Template.playerList.helpers({
	players : function() {
		var query;
		switch (Session.get("playerFilter")) {
			case "QB":
				query = Players.find({ position : "QB"}, {sort : { lastName : 1}});
				break;
			case "RB":
				query = Players.find({ position : "RB"}, {sort : { lastName : 1}});
				break;
			case "WR":
				query = Players.find({ position : "WR"}, {sort : { lastName : 1}});
				break;
			case "TE":
				query = Players.find({ position : "TE"}, {sort : { lastName : 1}});
				break;
			case "D/ST":
				query = Players.find({ position : "D/ST"}, {sort : { lastName : 1}});
				break;
			case "K":
				query = Players.find({ position : "K"}, {sort : { lastName : 1}});
				break;	
			default:
				query = Players.find({}, {sort : { lastName : 1}});
		}
		return query;
	}
});

Template.playerList.events({
	"click .filter-all" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","All");
	},

	"click .filter-qb" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","QB");
	},

	"click .filter-rb" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","RB");
	},

	"click .filter-wr" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","WR");
	},

	"click .filter-te" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","TE");
	},

	"click .filter-dst" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","D/ST");
	},

	"click .filter-k" : function(e) {
		e.preventDefault();
		Session.set("playerFilter","K");
	},

	"click .delete-player" : function(e) {
		e.preventDefault();
		var playerid = e.target.getAttribute("data-playerid"),
			playerInfo = e.target.getAttribute("data-playerInfo"),
			confirmDelete = confirm("Are you sure you want to delete " + playerInfo + " from the database?");

		if (confirmDelete) {
			Players.remove({ _id : playerid });
			alert("Player deleted");
		}else{
			alert("you did not delete the player");
		}
	}					
});