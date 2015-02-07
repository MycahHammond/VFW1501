//array and iterator
var joke = ["Knock knock...", "Who's there?", "Canoe...", "Canoe who?", "Canoe Help Me Figure This Out?!?"];
var i = -1;

//next button click function
var next = function (){
	if(i<4){
		i++;
	}
	else{
		i=0;
	}
	
	arrayLabel.setText(joke[i]);

};

//back button click funtion
var back = function (){
	if(i>0){
		i--;
	}
	else{
		i=4;
	}
	
	arrayLabel.setText(joke[i]);

};

//calls to click functions
nextButton.addEventListener("click", next);
backButton.addEventListener("click", back);
