import "./App.css";
import Heading from "./components/Heading";
import Ludo from "./components/Ludo";
import SideBar from "./components/SideBar";
import Start from "./components/Start";
import Form from "./components/Form";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const startFlag = useSelector((state) => state.startFlag.startFlag);
  const formFlag = useSelector((state) => state.formFlag.formFlag);
  const mode = "mobile";

  const currentTurn = useSelector((state) => state.currentTurn.currentTurn);

  return (
    <div className="app">
      {startFlag && <Start></Start>}
      {!startFlag && formFlag && <Form></Form>}
      {!startFlag && !formFlag && (
        <div className="ludo-container container">
          <Heading mode={mode}></Heading>
          <Ludo></Ludo>
          <SideBar></SideBar>
        </div>
      )}
    </div>
  );
}

export default App;
