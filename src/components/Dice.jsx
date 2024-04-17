import "../styles/components/Dice.css";

import { useSelector, useDispatch } from "react-redux";

const Dice = () => {
  return (
    <div className="dice-container">
      <div className="roll-btn-container">
        <button className="btn btn-dice">Roll the dice</button>
        <div className="dice-value"></div>
      </div>
      <div className="diceContainer">
        <div className="dice">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
          <div className="face right"></div>
          <div className="face left"></div>
        </div>
      </div>
    </div>
  );
};

export default Dice;
