import Heading from "./Heading";
import "../styles/components/Start.css";
import { useDispatch } from "react-redux";
import { invertStartFlag } from "../redux/states/startFlagSlice";
import { invertFormFlag } from "../redux/states/formFlagSlice";

const Start = () => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(invertStartFlag());
    dispatch(invertFormFlag());
  };

  return (
    <div className="start" onClick={handleStart}>
      <div className="start-heading">
        <img src="/Assets/ludo-icon.png" alt="" />
        <Heading></Heading>
      </div>
      <div className="start-btn">
        <span>Start</span>
        <img src="/Assets/play.png" alt="" />
      </div>
    </div>
  );
};

export default Start;
