function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const fasec = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        if (fasec.includes(face)) {
            face = fasec[fasec.indexOf(face)];
        } else {
            throw new Error('Error');
        }
        if (suits[suit]) {
            suit = suits[suit];
        } else {
            throw new Error('Error');
        }
        let card = {
            face,
            suit,
            toString() {
                return `${this.face}${this.suit}`;
            }
        };
        return card;
    }
    let cardData = [];
    for (const card of cards) {
        let face, suit = '';
        if (card.length == 3) {
            face = card[0] + card[1];
            suit = card[2];
        } else {
            face = card[0];
            suit = card[1];
        };
        
        try {
            cardData.push(createCard(face, suit).toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
        }
    }

    console.log(cardData.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
//printDeckOfCards(['5S', '3D', 'QD', '1C']);