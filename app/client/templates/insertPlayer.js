Template.insertPlayer.events({
	"submit .addPlayer" : function(event) {
		event.preventDefault();

		var firstname = event.target.playerFirstName.value,
			lastname = event.target.playerLastName.value,
			position = event.target.playerPosition.value,
			validationMessage = document.getElementById("validationMessage");

		if (!firstname || !lastname || !position) {
			validationMessage.innerHTML = "Please provide a value for all fields";
		}else{
			Players.insert({
				firstName : firstname,
				lastName : lastname,
				position : position
			});
			validationMessage.innerHTML = 
				"Player " + firstname + " " + lastname + " " + position + " sucessfully added to the database.";
				event.target.playerFirstName.value = "";
				event.target.playerLastName.value = "";
				event.target.playerPosition.value = "";
		}
	}
});