import "./App.css";
import Greetings from "./components/Greetings/Hello";
// import Forecast from "./components/Weather/Forecast";
import ActiveForecast from "./components/ActiveWeather/ActiveForecast";

function App() {
  return (
    <div className="App App-header">
      <header></header>
      <main>
        <Greetings isHello={false} />
        {/* <Forecast isNumber={10} /> */}
        <ActiveForecast />
      </main>
    </div>
  );
}

export default App;
