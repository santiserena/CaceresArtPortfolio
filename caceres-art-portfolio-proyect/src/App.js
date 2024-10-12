import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <img src={logo} />
    </div>
  );
}

export default App;
