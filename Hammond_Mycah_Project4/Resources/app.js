//Window
var mainWindow = Ti.UI.createWindow({
	title: "VFW Final Project",
});

var mainView = Ti.UI.createTableView({
	backgroundImage: "texture.jpg",
	backgroundRepeat: true 
	
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,
});

//get width & height
var setWidth = Ti.Platform.displayCaps.platformWidth;
var setHeight = Ti.Platform.displayCaps.platformHeight;
var margin = setHeight*.01;


//pull in workhorse
var doWork = require("workhorse");

//propogate stuff
mainView.addEventListener("click", function(next){
	doWork.doIt(next.source);
});


mainWindow.add(mainView);
// mainView.add(doWork.table);
//mainView.add(gallery, stories, comments);
navWindow.open();
