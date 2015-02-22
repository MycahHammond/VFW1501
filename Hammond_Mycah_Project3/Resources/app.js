//get photos
var getPhotosFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var getPhotos = getPhotosFolder.getDirectoryListing();
// var getPhotos = ["Bird.png", "Charles.png", "clouds.png", "CoffeeBean.png", "Coy.png", "DeepthoughtJr.png", "Dive.png" ];	
console.log(getPhotos);
//set W & H to platform
var setWidth = Ti.Platform.displayCaps.platformWidth;
var setHeight = Ti.Platform.displayCaps.platformHeight;

//Set Thumbnail sizes
var thumbSize = setWidth*.2;
var margin = setWidth*.04;

	
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#808080", 
	layout: "horizontal",
});

var border = Ti.UI.createView({
	top:0,
	width: setWidth,
	height: setHeight*.05,
	backgroundColor: "#fff",
});

var imageContainer = Ti.UI.createScrollView({
	top: border.height,
	layout: "horizontal",
	showVerticalScrollIndicator: true,
	width: setWidth,
	height: setHeight,
	contentWidth: setWidth,
	
});

var doWork = require("workhorse");
mainWindow.add(border);
mainWindow.add(imageContainer);
mainWindow.open();
