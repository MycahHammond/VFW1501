var joke = ["Knock knock...", "Who's there?", "Canoe...", "Canoe who?", "Canoe Help Me Figure This Out?!?"];
var i = -1;


var next = function (){
	if(i<4){
		i++;
	}
	else{
		i=0;
	}
	
	arrayLabel.setText(joke[i]);

};

var back = function (){
	if(i>0){
		i--;
	}
	else{
		i=4;
	}
	
	arrayLabel.setText(joke[i]);

};

nextButton.addEventListener("click", next);
backButton.addEventListener("click", back);
