//JSON
var podcast = {
	"Title":"Podcasts",	
	"thinkers":{
		"title":"Informative",
		"list":[
			{
				"name": "Invisibilia",
				"description": "Invisibilia is a series about the inivisible forces that touch all of our lives. It explores scientivic research, tying in personal stories to dive deep into the things we can't see that push and pull at us on a daily basis."
			},
			{
				"name": "TED Radio Hour",
				"description":"Technology, Entertainment, Design. TED pushes the limits on the way we think about everything, offering unique perspectives on a variety of subjects, weekly broadcasts prod at the minds of experts and deep thinkers to offer interesting perspectives."
			},
			{
				"name": "Radio Lab",
				"description": "Radio Lab explores the world on a different level. Merging science, philosophy, and the human experience to create truly unique and thought provoking content."
			}
		]
		
	},
	"Fun":{
		"title": "Entertainment",
		"list":[
			{
				"name": "StartUp",
				"description": "StartUp follows Alex Blumberg, formerly of \"This American Life\" and \"Planet Money\", as he podcasts about starting his very own podcasting company. An entertaining and informative look into the side of business we don't often get to see, starting one."
			},
			{
				"name": "All About Android",
				"description": "Jason Howell, Gina Tapani, and Ron Richards dive into all things Android. With weekly guests, highlights on hardware, news, and apps, they offer an entertaining and comprehensive look into the goings on of the Android world."
			}
		]
		
	}
};


var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
	
});

//Margin var
var m = "5%";
var doWork = require("workhorse");


var random = [{title: "dude"}, {title:"word"}, {title:"noice!"}, {title:"rad"}];

var titleView = Ti.UI.createView({
	height: "10%",
	top: "0%",
	backgroundColor: "#fff"
});

var border = Ti.UI.createView({
	height: 1,
	backgroundColor: "#333",
	top: titleView.height + titleView.top	
});

var titleLable = Ti.UI.createLabel({
	top: "17%",
	text: podcast.Title,
	font: {fontSize:35, fontWeight: "bold",}
});
 
var newList = Ti.UI.createTableView({
	data: podcast.list,
	top:  titleView.top + titleView.height + border.height
});


titleView.add(titleLable);
mainWindow.add(titleView, border);
mainWindow.open();
