class Player {
    constructor(name) {
        this。name = name;
        this。playedCards = { 17: 0， 16: 0， 15: 0， 14: 0， 13: 0， 12: 0， 11: 0， 10: 0， 9: 0， 8: 0， 7: 0， 6: 0， 5: 0， 4: 0， 3: 0 };
    }
    playCard(rank) { this。playedCards[rank]++; }
    addCard(rank) { this。playedCards[rank]++; }
}

class Game {
    constructor() {
        this。players = [new Player("对家")， new Player("下联")， new Player("下家")， new Player("自己")， new Player("上家")， new Player("上联")];
        this。remainingCards = { 17: 4， 16: 4， 15: 16， 14: 16， 13: 16， 12: 16， 11: 16， 10: 16， 9: 16， 8: 16， 7: 16， 6: 16， 5: 16， 4: 8， 3: 6 };
        this。updateTable();
    }

    playCard(playerIndex， rank) {
        if (this。remainingCards[rank] > 0) {
            this。players[playerIndex]。playCard(rank);
            this。remainingCards[rank]--;
            this。updateTable();
        } else {
            alert("剩余牌数不足！");
        }
    }

    addCard(playerIndex， rank) {
        if (this。remainingCards[rank] > 0) {
            this。players[playerIndex]。addCard(rank);
            this。remainingCards[rank]--;
            this。updateTable();
        } else {
            alert("剩余牌数不足，无法加牌！");
        }
    }

    resetGame() {
        this。players。forEach(player => Object。keys(player。playedCards)。forEach(rank => player。playedCards[rank] = 0));
        this。remainingCards = { 17: 4， 16: 4， 15: 16， 14: 16， 13: 16， 12: 16， 11: 16， 10: 16， 9: 16， 8: 16， 7: 16， 6: 16， 5: 16， 4: 8， 3: 6 };
        this。updateTable();
    }

    updateTable() {
        const playersTable = document。getElementById("playersTable");
        playersTable。innerHTML = "<tr><th>玩家</th><th>17</th><th>16</th><th>15</th><th>14</th><th>13</th><th>12</th><th>11</th><th>10</th><th>9</th><th>8</th><th>7</th><th>6</th><th>5</th><th>4</th><th>3</th></tr>";
        this。players。forEach(player => {
            const row = document。createElement("tr");
            row。innerHTML = `<td>${player。name}</td><td>${player。playedCards[17]}</td><td>${player。playedCards[16]}</td><td>${player。playedCards[15]}</td><td>${player。playedCards[14]}</td><td>${player。playedCards[13]}</td><td>${player。playedCards[12]}</td><td>${player。playedCards[11]}</td><td>${player。playedCards[10]}</td><td>${player。playedCards[9]}</td><td>${player。playedCards[8]}</td><td>${player。playedCards[7]}</td><td>${player。playedCards[6]}</td><td>${player。playedCards[5]}</td><td>${player。playedCards[4]}</td><td>${player。playedCards[3]}</td>`;
            playersTable。appendChild(row);
        });
        for (let rank = 17; rank >= 3; rank--) {
            document。getElementById(`remaining-${rank}`)。textContent = this。remainingCards[rank];
        }
    }
}

const game = new Game();

function playCard() {
    const playerIndex = parseInt(document。getElementById("playerSelect")。value);
    const rank = parseInt(document。getElementById("cardSelect")。value);
    game。playCard(playerIndex， rank);
}

function addCard() {
    const playerIndex = parseInt(document。getElementById("addPlayerSelect")。value);
    const rank = parseInt(document。getElementById("addCardSelect")。value);
    game。addCard(playerIndex， rank);
}

function resetGame() {
    game。resetGame();
}
