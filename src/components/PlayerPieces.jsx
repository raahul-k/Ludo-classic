import { useEffect } from "react";
import "../styles/components/PlayerPieces.css";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerArray } from "../redux/states/selectPlayersSlice";
import { BASE_POSITIONS } from "../../logic/constants";
import { UI } from "../../logic/UI";

const PlayerPieces = () => {
  const players = useSelector((state) => state.players.players);
  const dispatch = useDispatch();
  // const playerPiecesElements = {
  //   P1: document.querySelectorAll('[player-id="P1"].player-piece'),
  //   P2: document.querySelectorAll('[player-id="P2"].player-piece'),
  //   P3: document.querySelectorAll('[player-id="P3"].player-piece'),
  //   P4: document.querySelectorAll('[player-id="P4"].player-piece'),
  // };

  // useEffect(() => {
  //   console.log("Use effect ran");
  //   playerPiecesElements.forEach(([key, value]) => {
  //     dispatch(setPlayerArray({ player: key, array: value }));
  //   });
  // }, []);

  // useEffect(() => {
  //   setPiece;
  // }, [playerPiecesElements]);

  // const setPositions = async (divs, key, i, count) => {
  //   await divs.push(
  //     <div className="player-piece" player-id={key} piece={i} key={count}></div>
  //   );
  //   UI.setPiecePosition(key, i, BASE_POSITIONS[key][i]);
  // };

  const renderDivs = (obj) => {
    const divs = [];
    let count = 0;
    for (let key in obj) {
      if (obj[key]) {
        for (let i = 0; i < 4; i++) {
          count++;
          setPositions(divs, key, i, count);
        }
      }
    }
    return divs;
  };
  return (
    <div className="player-pieces">
      {renderDivs(players)}
      {/* <div className="player-piece" player-id="P1" piece="0"></div>
      <div className="player-piece" player-id="P1" piece="1"></div>
      <div className="player-piece" player-id="P1" piece="2"></div>
      <div className="player-piece" player-id="P1" piece="3"></div>
      <div className="player-piece" player-id="P2" piece="0"></div>
      <div className="player-piece" player-id="P2" piece="1"></div>
      <div className="player-piece" player-id="P2" piece="2"></div>
      <div className="player-piece" player-id="P2" piece="3"></div> */}
    </div>
  );
};

export default PlayerPieces;
