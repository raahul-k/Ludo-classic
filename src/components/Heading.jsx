import "../styles/components/Heading.css";
import { incrementTurn } from "../redux/states/turnSlice";

const Heading = (props) => {
  const handleTurn = () => {
    dispatch(incrementTurn());
  };
  const mode = props.mode;
  return (
    <div className={`heading ${mode}-heading`} onClick={handleTurn}>
      LUDO
    </div>
  );
};

export default Heading;
