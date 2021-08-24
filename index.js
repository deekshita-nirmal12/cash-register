const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){ //12
       if(cashGiven.value >= billAmount.value){ //2022 > 12 => true
            const amountToBeReturned = cashGiven.value - billAmount.value;  //2022-12 = 2010
            calculateChange(amountToBeReturned);
 
        }
        
        else{
                showMessage("The cash provided atleast be equal to the bill amount");
        }

  } else{
             showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned){
    //go over all the notes available
for(let i = 0; i < availableNotes.length; i++){
    
    //no. of notes needed for the denomination
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

//amount left after calculating the number of notes needed
    amountToBeReturned %= availableNotes[i];

    //updating the no. of notes in table
    noOfNotes[i].innerText = numberOfNotes; 

}
};

function hideMessage(){ 
    message.style.display = "none";
}


function showMessage(msg) {
    
    message.style.display = "block";
    message.innerText = msg;
}


