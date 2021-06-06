const numOfChars = 7,
      str = "DADADAD"

let antonCounter = 0,
    danikCounter = 0;


    for (let i = 0; i<numOfChars; i++){
        str[i]==="A"?antonCounter++:danikCounter++;
    }

    if (antonCounter>danikCounter){
        console.log("Anton")
    }else if(danikCounter>antonCounter){
        console.log("Danik")
    }else{
        console.log("Friendship")
    }