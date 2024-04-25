import { COORDINATES_MAP, PLAYERS, STEP_LENGTH } from "./constants.js";

const diceButtonElement = document.querySelector("#roll-button");
const resetButtonElement = document.querySelector("#reset-btn");
const playerPieces = document.querySelector(".player-pieces");
const playerPiecesElements = {
  P1: document.querySelectorAll('[player-id="P1"].player-piece'),
  P2: document.querySelectorAll('[player-id="P2"].player-piece'),
  P3: document.querySelectorAll('[player-id="P3"].player-piece'),
  P4: document.querySelectorAll('[player-id="P4"].player-piece'),
};

export class UI {
  static listenDiceClick(callback) {
    diceButtonElement.addEventListener("click", callback);
  }

  static listenResetClick(callback) {
    resetButtonElement.addEventListener("click", callback);
  }

  static listenPieceClick(callback) {
    playerPieces.addEventListener("click", callback);
  }

  /**
   *
   * @param {string} player
   * @param {Number} piece
   * @param {Number} newPosition
   */
  static setPiecePosition(player, piece, newPosition) {
    console.log("UI.setPiecePosition ran");
    if (!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
      console.error(
        `Player element of given player: ${player} and piece ${piece} not found`
      );
      return;
    }
    const [x, y] = COORDINATES_MAP[newPosition];

    const pieceElement = playerPiecesElements[player][piece];
    pieceElement.style.top = y * STEP_LENGTH + "%";
    pieceElement.style.left = x * STEP_LENGTH + "%";
  }

  static setTurn(index) {
    if (index < 0 || index > PLAYERS.length) {
      console.error("Index out of bounds");
      return;
    }

    const player = PLAYERS[index];
    //Display the player ID
    document.querySelector(
      ".active-player span"
    ).innerText = `Player ${player}`;

    const activePlayerBase = document.querySelector(".player-base.highlight");
    if (activePlayerBase) {
      activePlayerBase.classList.remove("highlight");
    }

    //Highlight the player base
    document
      .querySelector(`[player-id="${player}"].player-base`)
      .classList.add("highlight");
  }

  static enableDice() {
    diceButtonElement.removeAttribute("disabled");
  }

  static disableDice() {
    diceButtonElement.setAttribute("disabled", "");
  }

  /**
   *
   * @param {string} player
   * @param {Number[]} pieces
   */
  static highlightPieces(player, pieces) {
    pieces.forEach((piece) => {
      const pieceElement = playerPiecesElements[player][piece];
      pieceElement.classList.add("highlight");
    });
  }

  static unhighlightPieces() {
    document.querySelectorAll(".player-piece.highlight").forEach((piece) => {
      piece.classList.remove("highlight");
    });
  }

  static setDiceValue(value) {
    document.querySelector(".dice-value").innerText = value;
  }
}

// UI.setPiecePosition("P1", 0, 0);
// UI.setTurn(0);
// UI.disableDice();
// UI.enableDice();
// UI.highlightPieces("P1", [0]);
// UI.unhighlightPieces();
// UI.setDiceValue(5);
