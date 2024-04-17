import "../styles/components/PlayerPieces.css";
import { useSelector } from "react-redux";

const PlayerPieces = () => {
  const players = useSelector((state) => state.players.players);

  const renderDivs = (obj) => {
    const divs = [];
    let count = 0;
    for (let key in obj) {
      if (obj[key]) {
        for (let i = 0; i < 4; i++) {
          count++;
          divs.push(
            <div
              className="player-piece"
              player-id={key}
              piece={i}
              key={count}
            ></div>
          );
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
