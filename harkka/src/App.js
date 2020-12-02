import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReviewDisplayComponent from './ReviewDisplayComponent.js';
import NavBarComponent from './NavBarComponent.js'

function App() {

  let dataPacket =
  {
    display: ["some", "things", "to display"],
    hidden:
    {
      answer: ["hidden", "answers"],
      anecdote: "hidden description",
      examples: ["some", "examples"]
    },
    displayMode: "neutral"
  };
  return (

    <div className="App">
    <ReviewDisplayComponent dataPacket={dataPacket} />
    </div>
  );
}

export default App;
