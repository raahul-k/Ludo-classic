import ResetBtn from "./ResetBtn";
import NewGameBtn from "./NewGameBtn";
import Dice from "./Dice";
import "../styles/components/TurnInfo.css";

const TurnInfo = () => {
  return (
    <div className="turninfo">
      <div className="setGameBtns">
        <ResetBtn></ResetBtn>
        <NewGameBtn></NewGameBtn>
      </div>
      <div className="active-player">
        <p>Now playing</p>
        <span>Rahul</span>
      </div>
      <Dice></Dice>
    </div>
  );
};

export default TurnInfo;
