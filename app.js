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
const anythingGoes = ["I love you, and that’s the beginning and end of everything.", "I have a lot of questions. Number one, how dare you?", “Time is money; Money is power; Power is pizza; Pizza is knowledge. Let’s go!”, ];
}

something nice databse {
const somethingNice = ["No one is you and that is your superpower.", "Embrace the glorious mess that you are.", "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", "I think I'd miss you even if we never met."];
}

make it weird database {
const makeItWeird = ["I don't believe in astrology; I'm a Sagittarius and we're skeptical.", "Place is the greatest thing, as it contains all things.", "If I was looking for safe, I wouldn't be sticking my dick through the wall", "How do you get a round meatball into a sandwich? Lateral.Thinking."];
} */


function sendEmail() {

    const recName = document.getElementById('recname').value;
    const recEmail = document.getElementById('recmail').value;
    const sendName = document.getElementById('sendname').value; 
    const message;
    const inputLabel = document.getElementsByClassName('inputLabel');

    Email.send({
        SecureToken : "beb0a1d9-4cb4-4463-8669-f79377287a2a",
        To : `${recEmail}`,
        From : "spicycourier@gmail.com",
        Subject : `Spicy Courier here - we got a message for you ${recName}`,
        Body : `Hello ${recName}, you hot thang. Cheers, ${sendName}`
    }).then(function(message){
        alert("The Courier is on its way!")
        location.reload(inputLabel);
    });
};  