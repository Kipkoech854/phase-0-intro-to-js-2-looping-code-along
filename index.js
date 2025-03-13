// Code your solutions in this file
for(let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts);

const names =["Adrian", "Micheal","Evans"];
const event = "graduationParty";

function writeCards(names, event){
    let writtenCards = [];
for (let a = 0; a < names.length; a++){
let writtenCard = `Thank you, ${names[a]}, for the wonderful ${event} gift!`;
writtenCards.push(writtenCard);
}
return writtenCards;
}
console.log (writeCards(names, event));

function countDown(){
    let countDown = 10
    while(countDown >= 0){
        console.log(countDown--);
    }
}