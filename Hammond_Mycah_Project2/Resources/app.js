//Pull in workhorse
var doWork = require("workhorse");

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5",
	title: "Podcasts"
	
});

//Navigation window (iOS only)
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var newList = Ti.UI.createTableView({	
});

newList.setData(doWork.sections);
mainWindow.add(newList);
navWindow.open();
