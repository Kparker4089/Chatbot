function getValue(){
	var user = document.getElementById("chatBox");
	var userMessage = user.value;

	

	var user2 = document.getElementById("btn");
	user2.addEventListener("click", getValue);

	var chatMsg = document.getElementById("Question");


	
	 if(userMessage === "Yes, I am a student"){
		chatMsg.innerHTML = "Do you have your Identification Card?";
	} 
  
  else if(userMessage ==="No, I don't have my ID card"){
		chatMsg.innerHTML = "Here take a temporary ID for the day.";
	} 
  
  else if(userMessage === "No"){
		chatMsg.innerHTML = "Ok then, Move along";
	} 
  
else if(userMessage === "Yes, I have my ID card"){
	chatMsg.innerHTML = "Good job, now get to class."
}
}

getValue();