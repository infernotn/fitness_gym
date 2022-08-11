import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Plans } from "./components/Plans/Plans";
import { Programs } from "./components/Programs/Programs";
import { WhyUs } from "./components/WhyUs/WhyUs";
function App() {
  return (
    <div className="App">
      {/* <span style={{ color: "white" }}>Subscribe Zainkeepscode</span> */}
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
