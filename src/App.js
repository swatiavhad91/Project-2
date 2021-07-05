
import './App.css';
import AddImage from './Components/AddImage';
import Female_Card from '../src/Female_Card.png'  ;
import Male_Card from '../src/Male_Card.png';

const displayFemale=false;
function App() {
  return (
    <div className="App">

{ <AddImage/> }

<br></br>
      {displayFemale && <img src={Female_Card} alt="Female_Card" style={{height:"20vh"}} />}
      

      {!displayFemale && (<img src={Male_Card} alt="Male_Card" style={{height:"20vh"}}  />)} 
      <figcaption>John</figcaption>
    </div>
  );
}


export default App;
