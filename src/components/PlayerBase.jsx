import "../styles/components/PlayerBase.css";
import { useDispatch, useSelector } from "react-redux";

const PlayerBase = () => {
  const players = useSelector((state) => state.players.players);

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
