import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import FoodOne from "./components/FoodOne";
import FoodTwo from "./components/FoodTwo";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import "./tailwind.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <History />
      <FoodOne />
      <FoodTwo />
      <Gallery />
      {/* <Products /> */}
    </div>
  );
}

export default App;
