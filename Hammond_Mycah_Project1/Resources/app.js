Ti.UI.setBackgroundColor("#404040");
//Standard Margin
var m = "5%";

//View Margin
var mv = "10%";

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#808080" 
	
});

//Main view displaying elements from array
var arrayView =  Ti.UI.createView({
	borderColor: "#000",
	borderWidth: 5,
	borderRadius: 3,
	backgroundColor: "#fff",
	width: "90%",
	height: "65%",
	top: m
});

//next button view
var nextButton = Ti.UI.createView({
	borderColor: "#000",
	borderWidth: 5,
	borderRadius: 3,
	backgroundColor: "green",
	width: "35%",
	height: "20%",
	right: m,
	bottom: m,
});

//back button view
var backButton = Ti.UI.createView({
	borderColor: "#000",
	borderWidth: 5,
	borderRadius: 3,
	backgroundColor: "red",
	width: "35%",
	height: "20%",
	left: m,
	right: mv,
	bottom: m
});

//main view label with initial text
var arrayLabel = Ti.UI.createLabel({
	text: "Jokes!",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: "#000",
	font: { fontName: "Damascus", fontSize: "35"}	
});

//next button label
var nextLabel = Ti.UI.createLabel({
	text: "Next",
	color: "#000",
	font: { fontName: "Damascus", fontWeight: "bold", fontSize: "30"}
});

//back button label
var backLabel = Ti.UI.createLabel({
	text: "Back",
	color: "#000",
	font: { fontName: "Damascus", fontWeight: "bold", fontSize: "30"}
});


//Loads JS not essential to start up
var jsFunctions = require("workhorse");

arrayView.add(arrayLabel);
nextButton.add(nextLabel);
backButton.add(backLabel);
mainWindow.add(arrayView, nextButton, backButton);
mainWindow.open();

