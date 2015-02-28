//JSON
var casts = {
		"thinkers":{
			"name": "INFORMATIVE",
			"tag": "Deep thinking podcasts.",
			"list":[
				{
					title: "Invisibilia",
					"description": "Invisibilia is a series about the inivisible forces that touch all of our lives. It explores scientivic research, tying in personal stories to dive deep into the things we can't see that push and pull at us on a daily basis."
				},
				{
					title: "TED Radio Hour",
					"description":"Technology, Entertainment, Design. TED pushes the limits on the way we think about everything, offering unique perspectives on a variety of subjects, weekly broadcasts prod at the minds of experts and deep thinkers to offer interesting perspectives."
				},
				{
					title: "Radio Lab",
					"description": "Radio Lab explores the world on a different level. Merging science, philosophy, and the human experience to create truly unique and thought provoking content."
				}
			]
			
			},
		
		"fun":{
			"name": "ENTERTAINING",
			"tag": "Easy listening podcasts",
			"list":[
				{
					title: "StartUp",
					"description": "StartUp follows Alex Blumberg, formerly of \"This American Life\" and \"Planet Money\", as he podcasts about starting his very own podcasting company. An entertaining and informative look into the side of business we don't often get to see, starting one."
				},
				{
					title: "All About Android",
					"description": "Jason Howell, Gina Tapani, and Ron Richards dive into all things Android. With weekly guests, highlights on hardware, news, and apps, they offer an entertaining and comprehensive look into the goings on of the Android world."
				}
			]
			
			},
	};
	
//Section Array	
var sectionInfo = [];

//Description Function
var babySitter = function(kid){
	var descWindow = Ti.UI.createWindow({
		title: kid.title,
		backgroundColor: "#fff",		
	});
	
	var descView = Ti.UI.createView({
		backgroundColor: "#545454",
	
	});
	
	var descLabel = Ti.UI.createLabel({
		text: kid.desc,
		font: {
			fontSize: 16,
			fontStyle: "normal",
			fontFamily: "Helvetica"
		},
		color: "#fff",
		top: 5, 
		left:7,
		right:7,
		
	});
	
	descView.add(descLabel);
	descWindow.add(descView);
	navWindow.openWindow(descWindow, {animated:true});
};

//Creates Sections and Rows. Add Event Listeners.
for(n in casts){
	var sectHead = Ti.UI.createView({
		backgroundColor: "#00ccff"
	});
	
	var headLabel = Ti.UI.createLabel({
		text: casts[n].name
	});
	
	
	sectHead.add(headLabel);
//Footer
var sectFoot = Ti.UI.createView({
		backgroundColor: "#545454"
	});
	//Footer Label
	var footLabel = Ti.UI.createLabel({
		text: casts[n].tag,
		color: "00ccff",
	});
	
	
	sectFoot.add(footLabel);

	var section =  Ti.UI.createTableViewSection({
		headerView: sectHead,
		footerView: sectFoot
	});
	
	//Build Section Array
	sectionInfo.push(section);
	
	//Rows
	for(var i=0, j=casts[n].list.length; i<j; i++){
		var parent = Ti.UI.createTableViewRow({
			title: casts[n].list[i].title,
			desc: casts[n].list[i].description,
			hasChild: true,
			height: 50,
		});
		section.add(parent);
		//parent.addEventListener("click", babySitter);
	};
	
};

// newList.addEventListener("click", function(next){
	// babySitter(next.source);
// });



exports.kids = babySitter;
exports.sections = sectionInfo;



