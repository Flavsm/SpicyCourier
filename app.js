//SELECTORS

//EVENT LISTENERS

//FUNCTIONS

/* TO SELECT A MESSAGE
there are 3 different databases, one for each type of message.
after user chooses the type of message, it goes into a database.
make a function with a simple if or switch statement should work.
every message should correspond to an integer.
by using math.random method, a random message should be picked.

TO SEND AN EMAIL
once user puts info, app should login to gmail(if it isnt already) 
then create a new email
then put recipients email on "send to"
an automatic pre-made subject will be used for all messages
then recipients name will be used to start the message
the actual message comes next
then finish email with users name
and send


have to create email account

testing/examples:

maybe a simple word doc on google docs or array

anything goes database {

}

something nice databse {

}

make it weird database {

} */


function sendEmail() {

    const recName = document.getElementById('recname').value;
    const recEmail = document.getElementById('recmail').value;
    const sendName = document.getElementById('sendname').value; 
    const inputLabel = document.getElementsByClassName('inputLabel');

    Email.send({
        SecureToken : "beb0a1d9-4cb4-4463-8669-f79377287a2a",
        To : `${recEmail}`,
        From : "spicycourier@gmail.com",
        Subject : `Spicy Courier here - we got a message for you ${recName}`,
        Body : `Hello ${recName}, what do you think? Hahahahaha! Love you, ${sendName}`
    }).then(function(message){
        alert("The Courier is on its way!")
        location.reload(inputLabel);
    });
};  