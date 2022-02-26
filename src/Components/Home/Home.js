import Visualizer from "../Visualizer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="LogoContainer">
        <header className="Logo">
          <img
            alt="Logo"
            src={require("./../../Structure/Images/pokemon_logo.png")}
          />
        </header>
      </div>
      <Visualizer />
    </div>
  );
};

export default Home;
