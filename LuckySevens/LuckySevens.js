function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["gamble"].elements.length; loopCounter++) {
		if (document.forms["gamble"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["gamble"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function resetForm() {
	clearErrors();
	document.forms["gamble"]["bet"].value = "";
	document.getElementById("results").style.display = "";
	document.getElementById("totalRolls").innerText = "";
	document.getElementById("max").innerText = "";
	document.getElementById("totalMaxRolls").innerText = "";
	document.getElementById("submitButton").innerText = "Play";
	document.forms["gamble"]["bet"].focus();

}

function validateItems() {
	clearErrors();
	var bet = document.forms["gamble"]["bet"].value;
	var max = bet;
	var totalMaxBet = 0;
	var totalRolls = 0;
	if (bet == "" || isNaN(bet) || bet < 0 ) {
		alert("bet must be filled in with a number above 0.");
		document.forms["gamble"]["bet"].parentElement.className = "form-group has-error"
		document.forms["gamble"]["bet"].focus();
		return false;
	}
	
	while (bet > 0) {
		var dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
		var dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
		var roll = dice1 + dice2;
		if (max == bet) {
			totalMaxBet++;
		}
		if (roll == 7) {
			bet = Number(bet) + 4;
		}
		else {
			bet--;
		}
		if (bet > max) {
			max = bet;
			totalMaxBet = 0;
		}
		totalRolls++;

	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again";
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("max").innerText = "$" + max;
	document.getElementById("totalMaxRolls").innerText = totalMaxBet;

	return false;
}