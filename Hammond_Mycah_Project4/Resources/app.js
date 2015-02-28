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

//buttons
// var gallery	= Ti.UI.createView({
	// top:  margin,
	// height: setHeight*.3,
	// backgroundColor: "#0099ff",
	// opacity: .7,
	// title: "Gallery"
// });
// 
// var stories	= Ti.UI.createView({
	// top: gallery.height + margin + margin,
	// height: setHeight*.3,
	// backgroundColor: "#33ADFF",
	// opacity: .7,
	// title: "Stories",
// });
// 
// var comments = Ti.UI.createView({
	// top: gallery.height + stories.height + margin + margin + margin,
	// height: setHeight*.3,
	// backgroundColor: "#62CCFF",
	// opacity: .7,
	// title: "Comments",
// 
// });

//button Labels
// var galLabel = Ti.UI.createLabel({
	// text: gallery.title,
// });
// 
// var storyLabel = Ti.UI.createLabel({
	// text: stories.title,
// });
// 
// var commLabel = Ti.UI.createLabel({
	// text: comments.title,
// });
// 
// gallery.add(galLabel);
// stories.add(storyLabel);
// comments.add(commLabel);


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
