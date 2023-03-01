import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import "./tailwind.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <History />
    </div>
  );
}

export default App;
