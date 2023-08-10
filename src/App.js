import logo from "./assets/icons/WeatherIcon.png"
import './App.css';

function App() {
  return (
    <div className="App">

      {/* current weather image pulled from api */}
      <img src={logo}></img> 
      {/* Title of current weather from API */}
      <h1> current weather </h1>
      {/* Current Temperature from API */}
      <h1> Temperature </h1>
    </div>
  );
}

export default App;
