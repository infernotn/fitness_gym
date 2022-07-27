import "./App.css";
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
    </div>
  );
}

export default App;
