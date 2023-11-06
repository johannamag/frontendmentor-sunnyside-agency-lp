import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ZPattern from "./components/ZPattern";

function App() {
  return (
    <>
      <div className="nav-hero-container">
        <Navbar />
        <Hero />
      </div>
      <ZPattern />
    </>
  );
}

export default App;
