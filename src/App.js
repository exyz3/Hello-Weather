import "./App.css";
import Hello from "./komponenta1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Hello />
      </main>
    </div>
  );
}

export default App;
