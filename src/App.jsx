import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import FoodOne from "./components/FoodOne";
import "./tailwind.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <History />
      <FoodOne />
    </div>
  );
}

export default App;
