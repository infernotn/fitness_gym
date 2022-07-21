import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Programs } from "./components/Programs/Programs";
function App() {
  return (
    <div className="App">
      {/* <span style={{ color: "white" }}>Subscribe Zainkeepscode</span> */}
      <Hero />
      <Programs />
    </div>
  );
}

export default App;
