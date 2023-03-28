let guestList = [];


for (let i = 0 ; i < 11; i++){ // iterates through loop 11 times to request input from user to enter a guest name

    let user = prompt("Who would you like to invite to your dinner party?"); // requests user to input a name

    if(i < 10){ 

        guestList.push(user); // push function adds new name to array 

    }
    else {
        let replace = prompt ("You have already added 10 people to your guestlist. would you like to replace someone on the list with this person y / n ?"); //when the 11th person is entered by user this function is called
        

        if (replace == "y"){ // if user enters y it returns a list of the guests
               
            console.log("List of guests:");
    guestList.forEach(function(value) {
        console.log(value);
        });
        }

    
     
      let replacePerson = prompt ("Who would you like to remove ?" ) //request input from user

      let indexOfPerson = guestList.indexOf(replacePerson) //gets index of person user enters from string user
      guestList.splice(indexOfPerson , 1); //splice function starts at the index of person user enters and removes 1 person from the string
      console.log(guestList);

      let addPerson = prompt ("Who would you like to add?") //request user input
      guestList.push(addPerson); //adds new person to the guestlist

    
      guestList.forEach(function(value) { //outputs new guestlist with new person added 
        console.log(value);
        });


    }

    //run code with console window open in browser to see various outputs of information given as per prompt

   
       



}










