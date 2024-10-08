import "./App.css";
import Greetings from "./components/Greetings/Hello";
// import Forecast from "./components/Weather/Forecast";
import ActiveForecast from "./components/ActiveWeather/ActiveForecast";
import { GlavnaKomponenta } from "./components/ConditionalRendering/GlavnaKomponenta";

function App() {
  return (
    <div className="App App-header">
      <header></header>
      <main>
        <Greetings isHello={false} />
        {/* <Forecast isNumber={10} /> */}
        <ActiveForecast />
        <GlavnaKomponenta />
      </main>
    </div>
  );
}

export default App;
