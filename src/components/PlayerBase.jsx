import { useEffect } from "react";
import "../styles/components/PlayerBase.css";
import { useDispatch, useSelector } from "react-redux";

const PlayerBase = () => {
  const players = useSelector((state) => state.players.players);
  const turn = useSelector((state) => state.currentTurn.currentTurn);
  const numPlayers = useSelector((state) => state.numPlayers.numPlayers);

  const renderDivs = (obj) => {
    const divs = [];
    for (let key in obj) {
      if (obj[key]) {
        divs.push(
          <div key={key} className="player-base" player-id={key}>
            <div className="player-base-name">{obj[key]}</div>
          </div>
        );
      }
    }
    return divs;
  };

  useEffect(() => {
    console.log("NumPlayers", numPlayers);
    const players = document.querySelectorAll(".player-base");
    console.log("Current Turn", turn);
    console.log(players[turn].classList);
    if (players) {
      if (turn === 0) {
        if (players[numPlayers - 1].classList.contains("highlight")) {
          players[numPlayers - 1].classList.remove("highlight");
        }
      } else if (turn !== 0) {
        players[turn - 1].classList.remove("highlight");
      }
      players[turn].classList.add("highlight");
    } else {
      return;
    }
  }, [turn]);

  return (
    <div className="player-bases">
      {renderDivs(players)}
      {/* <div className="player-base" player-id="P1">
        <div className="player-base-name">{players["P1"]}</div>
      </div>
      <div className="player-base" player-id="P2">
        <div className="player-base-name">{players["P2"]}</div>
      </div>
      <div className="player-base" player-id="P3">
        <div className="player-base-name">{players["P3"]}</div>
      </div>
      <div className="player-base" player-id="P4">
        <div className="player-base-name">{players["P4"]}</div>
      </div> */}
    </div>
  );
};

export default PlayerBase;
