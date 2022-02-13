var parag = document.getElementById('parag');
// var counter_number_div = document.getElementById('c_n');

var voices = [];
function talk(voice) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = voice;
    msg.lang = 'en';
    // msg.volume = 1;
    // msg.pitch = 1;
    // msg.voice = voices[4];
    msg.onstart = function (event) {
        parag.innerText = event.target.text;
    }
    window.speechSynthesis.speak(msg);
    msg.onerror = function (e) {
        console.log(e)
    }

}

var messages = [
    ''
];



function setSpeech() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 3);
        }
    )
}

let s = setSpeech();
s.then((all_voices) => {
    voices = all_voices;
    // console.log(voices)

    //messages.forEach(message => {
    //  talk(`${message}`);
    //})


    // var i = ['Paul', 'jeff', 'Harry', 'Jamiller'];
    // i.forEach(ele => {
    //     let index = i.findIndex(e => e == 'Jamiller');
    //     talk(`Number ${index + 1} : ${ele},`);
    // })
    allocateTicket()
    // while (i < 11) {
    //     talk(i);
    //     i+
    // }

    // for (i = 0; i <= 100; i++) {
    //     talk(i);
    // }
});


var tickets = [113, 115, 116, 132, 165, 187, 143, 453, 110];
var counters = [10, 9, 300];

function allocateTicket() {
    tickets.forEach(ticket => {
        var counter;
        if (isEven(ticket)) {
            if (isDivisibleBy5(ticket)) {
                counter = counters[2]
            } else {
                counter = counters[0]
            }
        } else {
            counter = counters[1]
        }

        display(ticket, counter);
    })
}

function display(ticket, counter) {
    let my_message = `Ticket Number ${ticket} Proceed to counter number : ${counter}`;
    // 
    talk(my_message)
}
function isEven(n) {
    return n % 2 == 0;
}
function isDivisibleBy5(ticket) {
    return ticket % 5 == 0;
}
