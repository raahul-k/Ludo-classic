import Heading from "./Heading";
import TurnInfo from "./TurnInfo";
import "../styles/components/SideBar.css";

const SideBar = () => {
  const mode = "desktop";
  return (
    <div className="sidebar">
      <Heading mode={mode}></Heading>
      <TurnInfo></TurnInfo>
    </div>
  );
};

export default SideBar;
