var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
	
});

//Margin var
var m = "5%";

var random = [{title: "dude"}, {title:"word"}, {title:"noice!"}, {title:"rad"}];

var titleView = Ti.UI.createView({
	height: "10%",
	top: "0%",
	backgroundColor: "#fff"
});

var titleLable = Ti.UI.createLabel({
	top: "17%",
	text: "Random Items",
	font: {fontSize:35, fontWeight: "bold",}
});
 
var newList = Ti.UI.createTableView({
	data: random,
	top: titleView.height
});



titleView.add(titleLable);
mainWindow.add(titleView, newList);
mainWindow.open();
