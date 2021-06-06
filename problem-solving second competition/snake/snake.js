const rows = 9,
      columns= 9;

let output ="";
/* ...# or #... */
let toggle = true;
// iterate over the rows
for (let i = 0; i<rows; i++){
    // if the row is even e.g. 0, 2, 4, 6
    if(i % 2 ==0){
        // will print ####
        for (let j =0; j<columns; j++){
            output+="#"
        }
        // after the hashes will go to new line
        output +="\n"
        // if the row number is odd
    }else{
        // dots then #
        if(toggle){
            for (let k =0; k<columns-1; k++){
                output+="."
            }
            output+="#\n";
            toggle = false;
        // # then dots
        }else{
            output+="#";
            for (let k = 0; k<columns -1 ; k++){
                output+="."
            }
            output+="\n"
            toggle = true;
        }
       

    }
}
console.log(output)