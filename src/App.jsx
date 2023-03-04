import Navbar from "./components/Header/Navbar";
import Hero from "./components/Header/Hero";
import About from "./components/About";
import History from "./components/History";
import FoodOne from "./components/FoodOne";
import FoodTwo from "./components/FoodTwo";
import Gallery from "./components/Gallery";
// import Cta from "./components/Cta";
import Products from "./components/Products";
import Footer from "./components/Footer/Footer";
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
      {/* <Cta /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
