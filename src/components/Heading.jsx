import "../styles/components/Heading.css";
import { incrementTurn } from "../redux/states/turnSlice";

const Heading = (props) => {
  const handleTurn = () => {
    dispatch(incrementTurn());
  };
  const mode = props.mode;
  return (
    <h1 className={`heading ${mode}-heading`} onClick={handleTurn}>
      LUDO
    </h1>
  );
};

export default Heading;
