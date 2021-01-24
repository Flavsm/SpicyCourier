
//anything goes database 7
const anythingGoes = ["I love you, and that’s the beginning and end of everything.", "I have a lot of questions. Number one, how dare you?", "Time is money; Money is power; Power is pizza; Pizza is knowledge. Let's go!", "I regret nothing.", 
"There\'s an old saying in Tennessee — I know it\'s in Texas, probably in Tennessee — that says, fool me once, shame on — shame on you. Fool me — you can\'t get fooled again.",
"I guess I'm gonna fade into Bolivian.", "If you gotta go, go with a smile!" ];


//something nice databse 7
const somethingNice = ["No one is you and that is your superpower.", "Embrace the glorious mess that you are.", "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", "I think I'd miss you even if we never met.", 
"You are my person.", "If you feel embarrassed then I'll be your pride, if you need directions then I'll be the guide. For all time.", 
"Still, I'll always be there for you."];


//make it weird database  7
const makeItWeird = ["I don't believe in astrology; I'm a Sagittarius and we're skeptical.", "Place is the greatest thing, as it contains all things.", "If I was looking for safe, I wouldn't be sticking my dick through the wall.", "How do you get a round meatball into a sandwich? Lateral.Thinking.", 
"I sexually Identify as an Attack Helicopter. People say to me that a person being a helicopter is Impossible and I'm retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades on my body. From now on I want you guys to call me 'Apache'. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.", 
"I'm Rick Harrison, and this is my pawn shop. I work here with my old man and my son, Big Hoss. Everything in here has a story and a price. One thing I've learned after 69 years - you never know what is gonna come through that door.", 
"To be fair, you have to have a very high IQ to understand Rick and Morty.", ];
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
    const checkBox = document.querySelector('.checkBox');

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
            Subject: `Spicy Courier here. We got a message for you ${recName}.`,
            Body: `Dear ${recName},

                        ${msg}
                        
                    Regards, ${sendName}`
        }).then(function (message) {
            alert("The Courier is on its way!")
            location.reload(inputLabel);
        });
    };
};  