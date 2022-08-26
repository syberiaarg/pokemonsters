import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import AboutMe from "./Pages/AboutMe"
import Registry from "./Pages/Registry"
import Team from "./Pages/Team"
import ResponsiveAppBar from "./Components/Navbar/";


function App() {

  return (
    <div className="App">
      <header>
        <ResponsiveAppBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  )
}

export default App;
