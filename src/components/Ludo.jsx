import PlayerPieces from "./PlayerPieces";
import PlayerBase from "./PlayerBase";
import "../styles/components/Ludo.css";

const Ludo = () => {
  return (
    <div className="ludo">
      <PlayerPieces></PlayerPieces>
      <PlayerBase></PlayerBase>
    </div>
  );
};

export default Ludo;
