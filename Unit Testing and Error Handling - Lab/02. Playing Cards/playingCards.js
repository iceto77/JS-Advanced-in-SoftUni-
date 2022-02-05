function cardFactory(face, suit) {
    const fasec = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }
    if (fasec.includes(face)) {
        face = fasec[fasec.indexOf(face)];
    }else{
        throw new Error('Error');
    }
    if(suits[suit]){
        suit =suits[suit];
    }else{
        throw new Error('Error');
    }
    let card = {
        face,
        suit,
        toString() {
            return `${this.face} + ${this.suit}`;
        }
    };
    return card;
}

let card = cardFactory('A', 'S');
console.log(card);
card.toString();
//solve('10', 'H');
//solve('1', 'C');