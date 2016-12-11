function printHangman(count) {
	var man = "";
	var head = " ( ) \n";
	var arms = " \\|/\n";
	var belly = "  |\n";
	var legs = " / \\";
	
	switch(count) {
			case 1:
				alert(head);
				break;
			case 2:
				alert(head + arms);
				break;
			case 3:
				alert( head + arms+ belly);
				break;
			case 4:
				alert("You lost the game: \n"+ head + arms+ belly + legs);
				break;
			default:
				console.log("Something went wrong!");
		}
}

var game = true;

while (game) { 
    if (start == undefined) {
        var count = 0;
        var win = 0;
        var word = prompt("Pick a word!");
    }
	while(count<4){
		 var guess = prompt("Pick a letter!");
		 if(word.includes(guess)){
			 win+=1;
			 if(win===word.length){
				 alert("You won the game!!!");
				 break;
			 }
		 }
		 else{
			 count+=1;
			 printHangman(count);
		 }	 
	}
	game = false;
    var start = true;
}
