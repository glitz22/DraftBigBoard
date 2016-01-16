Template.playerPool.helpers({
	players : function() {
		var query;
		switch (Session.get("playerPoolFilter")) {
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