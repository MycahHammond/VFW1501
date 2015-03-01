//images
var getPhotosFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var getPhotos = getPhotosFolder.getDirectoryListing();

//JSON
var data = {
	"gallery":{
		"info":[
			{
				title:"Gallery",
				"desc":getPhotos
			}
		],
	},
	"story":{
		"info":[
			{
				title:"Story",
				"desc":[
					{
						title:"The Artist",
						"description":"I look for inspiration in everyday things. Things that hit home to me on a personal note. In efforts to improve my skills as an artist I've been keeping either a small sketch book, or a stack of sticky notes with me as much as possible. This allows me to doodle almost anywhere and keeps me sharp."
					},
					{
						title:"Sticky Note Self Portraits",
						"description":"The Sticky Note Self Portraits (SNSP) started as an excercise to keep my skills sharp, and blossomed into this entire series that I ended up using to explore a bit of myself and to vent as needed."
					},
					{
						title:"Mediums",
						"description":"I mostly work with pen and ink. Initial sketches are done lightly in pencil, and inked in once I'm happy with them. Pencil marks are generally erased and color ink is added. Occasionally a paint pen or two will find is way into the mix. I've also started dabbling in acrylics for larger projects."
					}
					
				],
			},
		],
	},
	"comments":{
		"info":[
			{
				title:"Comments",
				"desc":[
					{
						title:"New",
						"description":"",
					},
				
				],
			},
		],
	},
	
};



//Functions

//open new window
var getPage = function(target){
	//Gallery button click
	if(target.title == "Gallery"){	
		var detailWindow = Ti.UI.createWindow({
			backgroundColor:"#333",
			title: target.title,	
		});
			
			var detailDisplay = Ti.UI.createImageView({
				
					image: "images/" + getPhotos[1], 
			});
		}
	//Story button click	
	else if(target.title == "Story"){
		var detailRows = [];

		var detailWindow = Ti.UI.createWindow({
			backgroundColor:"#333",
			title: target.title,
		});
		
		var detailDisplay = Ti.UI.createTableView({
			
		});
		
		var storyTeller = function(storyTarget){
			var storyWindow = Ti.UI.createWindow({
				backgroundImage: "texture.jpg",
				title: storyTarget.title,
			});
			
			var storyView = Ti.UI.createView({
				backgroundColor: "#fff",
				top: margin*2,
				left: margin*2,
				right: margin*2,
				bottom: margin*2,
				borderRadius: 5,
			});
			
			var storyText = Ti.UI.createLabel({
				text: storyTarget.words,
				color:"#000",
				top: 0,
				left: margin,
				right: margin,
				
			});
			storyView.add(storyText);
			storyWindow.add(storyView);
			navWindow.openWindow(storyWindow);
			
		};
		
		detailDisplay.addEventListener("click", function(read){
			storyTeller(read.source);
		});
		for(var i=0, j=target.desc.length; i<j;	i++){
	
				var detailRow = Ti.UI.createTableViewRow({
					title: target.desc[i].title,
					words: target.desc[i].description,
					hasChild: true,
				});
					detailRows.push(detailRow);
					console.log(detailRow.description);
				};
		
		detailDisplay.setData(detailRows);
	
	}
	//Comments button click
	else if(target.title == "Comments"){
		//Create Window
		var detailWindow = Ti.UI.createWindow({
			backgroundColor:"#333",
			title: target.title,
		});

		//Set table view
		var detailDisplay = Ti.UI.createTableView({
		});
		
		//Open text view for input
		var getComment = function(){
			var commentWindow = Ti.UI.createWindow({
				backgroundImage:"texture.jpg"
				// backgroundColor: "#333"
			});
			
			var subjectView = Ti.UI.createView({
				top: margin*2,
				height: 30,
				backgroundColor: "#fff"
			});
			var subjectLine = Ti.UI.createTextField({
				hintText: "Subject",
				left: margin
			});
			
			var commentArea	= Ti.UI.createTextArea({
				top: subjectView.height + margin*2 + margin*2,
				height: setHeight,
				left: margin*2,
				right: margin*2,
			});
			
			var getOn = function(){
				var newInput = commentArea.getValue();
				
			};
			
			console.log(getOn);
			
			
			// commentView.add(commentArea);
			subjectView.add(subjectLine);
			commentWindow.add(subjectView,commentArea);
			navWindow.openWindow(commentWindow);
		};
		
		//blank array for rows
		var commentsRows = [];
		//build rows/array
		for(var i=0, j=target.desc.length; i<j;	i++){
	
				var detailRow = Ti.UI.createTableViewRow({
					title: target.desc[i].title,
					input: target.desc[i].description,
					hasChild: true,
				});
					commentsRows.push(detailRow);
				};
		
		detailDisplay.setData(commentsRows);
		
		
		detailDisplay.addEventListener("click", function(tell){
			getComment(tell.source);
		});
	};
	
	//opens new window for all buttons
	detailWindow.add(detailDisplay);
	navWindow.openWindow(detailWindow);	
	
	
	//swipe to close. Just because I wanted to see if it would work.
		var closeDetail = function(){
			detailWindow.close({animated:true});
		};
		
	detailWindow.addEventListener("swipe", closeDetail);
};

//create rows
var rows =[];

for(n in data){
	for(var i=0, j=data[n].info.length; i<j; i++){
		var row = Ti.UI.createTableViewRow({
			title: data[n].info[i].title,
			desc: data[n].info[i].desc,
			hasChild: true,
			height: 50,
		});
		
		rows.push(row);		
	};
	mainView.setData(rows);
};

// exports.table = rows;
exports.doIt = getPage;
