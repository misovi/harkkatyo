import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReviewDisplayComponent from './ReviewDisplayComponent.js';
import NavBarComponent from './NavBarComponent.js'
import FileUploaderComponent from './FileUploaderComponent.js'

function App() {

  function cb(input)
  {
    console.log(input);
  }

  function approve()
  {
    console.log("approve");
  }

  function undo()
  {
    console.log("undo");
  }

  let dataPacket =
  {
    display: ["some", "things", "to display"],
    hidden:
    {
      answer: ["hidden", "answers"],
      anecdote: "hidden description",
      examples: ["some", "examples"]
    },
    displayMode: "false"
  };
  return (

    <div className="App">
    <NavBarComponent />
    <FileUploaderComponent />
    </div>
  );
}

export default App;
