import "./App.css";
import Heading from "./components/Heading";
import Ludo from "./components/Ludo";
import SideBar from "./components/SideBar";
import Start from "./components/Start";
import Form from "./components/Form";
import { useSelector } from "react-redux";

function App() {
  const startFlag = useSelector((state) => state.startFlag.startFlag);
  const formFlag = useSelector((state) => state.formFlag.formFlag);
  const mode = "mobile";

  return (
    <div className="app">
      {startFlag && <Start></Start>}
      {!startFlag && formFlag && <Form></Form>}
      {!startFlag && !formFlag && (
        <div className="ludo-container">
          <Heading mode={mode}></Heading>
          <Ludo></Ludo>
          <SideBar></SideBar>
        </div>
      )}
    </div>
  );
}

export default App;
