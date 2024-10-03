import "./App.css";
import Greetings from "./components/Greetings.js";

function App() {
  return (
    <div className="App App-header">
      <header></header>
      <main>
        <Greetings isHello={true} />
      </main>
    </div>
  );
}

export default App;
