
//anything goes database 
const anythingGoes = ["I love you, and that’s the beginning and end of everything.", "I have a lot of questions. Number one, how dare you?", "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let's go!", "I regret nothing."];


//something nice databse 
const somethingNice = ["No one is you and that is your superpower.", "Embrace the glorious mess that you are.", "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", "I think I'd miss you even if we never met."];


//make it weird database 
const makeItWeird = ["I don't believe in astrology; I'm a Sagittarius and we're skeptical.", "Place is the greatest thing, as it contains all things.", "If I was looking for safe, I wouldn't be sticking my dick through the wall", "How do you get a round meatball into a sandwich? Lateral.Thinking."];
//get database length
const dataBaseLength = makeItWeird.length - 1;

//get a random number from 0 to database length
const anyNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//variable of that random number
const randomNumber = anyNumber(0, dataBaseLength);

//check radio button, select right message, send email
function sendEmail() {

    const anythingMessage = anythingGoes[randomNumber];
    const somethingMessage = somethingNice[randomNumber];
    const weirdMessage = makeItWeird[randomNumber];

    for (let i = 0; i < 2; i++) {
        let getSelectedValue = document.querySelector('input[name="style"]:checked');
        if (getSelectedValue != null) {
            let radioValue = getSelectedValue.value;
            if (radioValue === 'anythinggoes') {
                return messageContent(anythingMessage)
                //console.log('anything')
            } else if (radioValue === 'somethingnice') {
                return messageContent(somethingMessage)
                //console.log('nice')
            } else if (radioValue === 'makeitweird') {
                return messageContent(weirdMessage)
                //console.log('weird')
            } else {
                console.log("Select the type of message you want to send.");
            }
        }
    };

    function messageContent(msg) {
        const recName = document.getElementById('recname').value;
        const recEmail = document.getElementById('recmail').value;
        const sendName = document.getElementById('sendname').value;
        const inputLabel = document.getElementsByClassName('inputLabel');

        Email.send({
            SecureToken: "beb0a1d9-4cb4-4463-8669-f79377287a2a",
            To: `${recEmail}`,
            From: "spicycourier@gmail.com",
            Subject: `Spicy Courier here - we got a message for you ${recName}`,
            Body: `Dear ${recName},

                        ${msg}
                        
                    ${sendName}`
        }).then(function (message) {
            alert("The Courier is on its way!")
            location.reload(inputLabel);
        });
    };
};  