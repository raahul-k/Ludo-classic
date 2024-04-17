import {
  BASE_POSITIONS,
  HOME_ENTRANCE,
  HOME_POSITIONS,
  PLAYERS,
  SAFE_POSITIONS,
  START_POSITIONS,
  STATE,
  TURNING_POINTS,
} from "./constants.js";
import { UI } from "./UI.js";

export class Ludo {
  currentPositions = {
    P1: [],
    P2: [],
  };

  _diceValue;
  get diceValue() {
    return this._diceValue;
  }
  set diceValue(value) {
    this._diceValue = value;

    UI.setDiceValue(value);
  }

  _turn;
  get turn() {
    return this._turn;
  }
  set turn(value) {
    this._turn = value;
    UI.setTurn(value);
  }

  _state;
  get state() {
    return this._state;
  }
  set state(value) {
    this._state = value;

    if (value === STATE.DICE_NOT_ROLLED) {
      UI.enableDice();
    } else {
      UI.disableDice();
    }
  }
  constructor() {
    console.log("Hello world, lets play ludo");

    this.listenDiceClick();
    this.listenResetClick();
    this.listenPieceClick();

    this.resetGame();
  }

  listenDiceClick() {
    UI.listenDiceClick(this.onDiceClick.bind(this));
  }

  //When two methods within a class require the object and one of them is a callback
  //in the other function, bind keyword ensures that both methods refer to the same object

  onDiceClick() {
    this.diceValue = Math.floor(Math.random() * 6) + 1; //1-6 //Setting the dice value using setter function
    this.state = STATE.DICE_ROLLED; //Setting the state using setter function

    this.checkOpenPieces();
  }

  checkOpenPieces() {
    const player = PLAYERS[this.turn];
    //Look for free pieces otherwise increment the turn
    const openPieces = this.getOpenPieces(player);
    console.log(openPieces);
    if (openPieces.length) {
      UI.highlightPieces(player, openPieces);
      if (openPieces.length === 1) {
        this.movePiece(player, openPieces[0], this.diceValue);
      }
    } else {
      this.incrementTurn();
    }
  }

  incrementTurn() {
    this.turn = this.turn === 0 ? 1 : 0;
    this.state = STATE.DICE_NOT_ROLLED;
  }

  getOpenPieces(player) {
    return [0, 1, 2, 3].filter((piece) => {
      const currentPosition = this.currentPositions[player][piece];

      if (currentPosition === HOME_POSITIONS[player]) {
        return false;
      }
      if (
        BASE_POSITIONS[player].includes(currentPosition) &&
        this.diceValue !== 6
      ) {
        return false;
      }
      if (
        HOME_ENTRANCE[player].includes(currentPosition) &&
        this.diceValue > HOME_POSITIONS[player] - currentPosition
      ) {
        console.log("Flag 3", flag);
        return false;
      }

      return true;
    });
  }

  listenResetClick() {
    UI.listenResetClick(this.resetGame.bind(this));
  }

  resetGame() {
    this.currentPositions = structuredClone(BASE_POSITIONS);

    PLAYERS.forEach((player) => {
      [0, 1, 2, 3].forEach((piece) => {
        this.setPiecePosition(
          player,
          piece,
          this.currentPositions[player][piece]
        );
      });
    });

    UI.unhighlightPieces();
    this.turn = 0;
    this.state = STATE.DICE_NOT_ROLLED;
  }

  listenPieceClick() {
    UI.listenPieceClick(this.onPieceClick.bind(this));
  }

  onPieceClick(event) {
    const target = event.target;
    if (!target.classList.contains("player-piece")) {
      return;
    }

    const player = target.getAttribute("player-id");
    const piece = target.getAttribute("piece");

    if (this.getOpenPieces(player).includes(Number(piece))) {
      this.handlePieceClick(player, piece);
    }
  }

  handlePieceClick(player, piece) {
    if (this.turn === PLAYERS.indexOf(player)) {
      const currentPosition = this.currentPositions[player][piece];
      if (BASE_POSITIONS[player].includes(currentPosition)) {
        this.setPiecePosition(player, piece, START_POSITIONS[player]);
        this.state = STATE.DICE_NOT_ROLLED;
        UI.unhighlightPieces();
        return;
      }
      UI.unhighlightPieces();
      this.movePiece(player, piece, this.diceValue);
    } else {
      return;
    }
  }

  setPiecePosition(player, piece, newPosition) {
    this.currentPositions[player][piece] = newPosition;
    UI.setPiecePosition(player, piece, newPosition);
  }

  movePiece(player, piece, diceValue) {
    const maxDice = diceValue;
    let isKill;
    const interval = setInterval(() => {
      this.incrementPiecePosition(player, piece);
      diceValue--;

      if (diceValue <= 0) {
        clearInterval(interval);
        if (this.hasPlayerWon(player)) {
          document.querySelector(
            ".dynamicgameinfo"
          ).innerText = `Congratulations, Player ${player} wins`;
          this.resetGame();
          return;
        }

        isKill = this.checkForKill(player, piece);

        if (isKill || this.diceValue) {
          this.state = STATE.DICE_NOT_ROLLED;
        }

        if (maxDice === 6 || isKill) {
          this.turn = this.turn === 0 ? 0 : 1;
          this.state = STATE.DICE_NOT_ROLLED;
        } else {
          this.incrementTurn();
        }
        UI.unhighlightPieces();
      }
    }, 200);
  }

  hasPlayerWon(player) {
    return [0, 1, 2, 3].every(
      (piece) => this.currentPositions[player][piece] === HOME_POSITIONS[player]
    );
  }

  checkForKill(player, piece) {
    const currentPosition = this.currentPositions[player][piece];
    const opponent = player === "P1" ? "P2" : "P1";
    let kill = false;

    [0, 1, 2, 3].forEach((piece) => {
      const opponentPosition = this.currentPositions[opponent][piece];

      if (
        currentPosition === opponentPosition &&
        !SAFE_POSITIONS.includes(currentPosition)
      ) {
        kill = true;
        document.querySelector(
          ".dynamicgameinfo"
        ).innerText = `${player} captured ${player === "P1" ? "P2" : "P1"}`;
        this.setPiecePosition(opponent, piece, BASE_POSITIONS[opponent][piece]);
      }
    });

    return kill;
  }

  incrementPiecePosition(player, piece) {
    this.setPiecePosition(
      player,
      piece,
      this.getIncrementedPosition(player, piece)
    );
  }

  getIncrementedPosition(player, piece) {
    const currentPosition = this.currentPositions[player][piece];

    if (currentPosition === TURNING_POINTS[player]) {
      return HOME_ENTRANCE[player][0];
    } else if (currentPosition === 51) {
      return 0;
    }
    return currentPosition + 1;
  }
}
