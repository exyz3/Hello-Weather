import "./App.css";
import Greetings from "./components/Greet/Hello.js";
import Number from "./components/AskNumber/Number.js";

function App() {
  return (
    <div className="App App-header">
      <header></header>
      <main>
        <Greetings isHello={true} />
        <Number isNumber={50} />
      </main>
    </div>
  );
}

export default App;
