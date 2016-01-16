Template.editPlayer.helpers({
	selected : function(key,value) {
		return key === value ? "selected" : "";
	}
});

Template.editPlayer.events({
	"submit .updatePlayer" : function(event) {
		event.preventDefault();
		var firstname = event.target.playerFirstName.value,
			lastname = event.target.playerLastName.value,
			position = event.target.playerPosition.value,
			playerid = event.target.playerid.value,
			validationMessage = document.getElementById("validationMessage");

		if (!firstname || !lastname || !position) {
			validationMessage.innerHTML = "Please provide a value for all fields";
		}else{
			Players.update(
				{ _id : playerid},
				{ 
					$set : {
						firstName : firstname,
						lastName : lastname,
						position : position
					}
				}
			);
			validationMessage.innerHTML = 
				"Player " + firstname + " " + lastname + " " + position + " sucessfully updated.";
		}
	}
});