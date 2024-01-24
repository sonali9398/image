import './App.css';
import Slider from './components/Slider';
import pics from './constants.json'

function App() {
  return (
    <div className="App">
        <h1>Image Slider</h1>

      <Slider data={pics}/>
    </div>
  );
}

export default App;
