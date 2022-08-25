import Visualizer from "../Visualizer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <header className="LogoContainer">
        <div className="logoBox">
          <img
            className="logo"
            alt="Logo"
            src={require("./../../Structure/Images/pokemon_logo.png")}
          />
        </div>
      </header>
      <Visualizer />
    </div>
  );
};

export default Home
