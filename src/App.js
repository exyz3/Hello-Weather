import "./App.css";
import Greetings from "./components/Greet/Hello.js";
import PoP from "./components/Weather/Forecast.js";
import ActiveForecast from "./components/ActiveWeather/ActiveForecast.js";

function App() {
  return (
    <div className="App App-header">
      <header></header>
      <main>
        <Greetings isHello={false} />
        <PoP isNumber={"www"} />
        <ActiveForecast />
      </main>
    </div>
  );
}

export default App;
