// Creating an object to hold messages

const messageParts = {

    firstPart: ["Einstein said that.", "I got that from Wiz Khalifa.", "I learnt that from a book.", "My opinion."],
    secondPart: ["Liverpool will win the EPL this season", "Manchester united sucks", "Messi is a sellout", "PSG will not win the champions league"],
    thirdPart: ["Linking Park is my favorite band", "I love me some Westlife too", "Get over here", "Video games are the best source of entertainment"]
 
};

// An empty array to hold final message
let completeMessage = [];

// getting random numbers
function generateRandomNumber(number){
    return Math.floor(Math.random() * number);
}

for (let option in messageParts){
    let optionIndex = generateRandomNumber(messageParts[option].length);

    if (option === 'firstPart'){
         completeMessage.push(`The first complete randommessage is "${messageParts[option][optionIndex]}".`);
    }
    else if (option === 'secondPart'){
         completeMessage.push(`The second complete randommessage is "${messageParts[option][optionIndex]}".`);
    }
    else if (option === 'thirdPart'){
         completeMessage.push(`The third complete randommessage is "${messageParts[option][optionIndex]}".`);
    }
    else{
         completeMessage.push('Invalid');
    }
    
}

console.log(completeMessage.join('\n'));