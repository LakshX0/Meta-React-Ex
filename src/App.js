import Btn from "./Btn.js";
import Heading from "./Heading.js";
import ModeToggler from "./ModeToggler";
import GuessNum from "./GuessNum";
import InputComponet from "./InputComponent.js";

function App() {
  return (
    <div className="App">
      <ModeToggler />
      <Heading firstName="Bob" />
      <Heading firstName="Machan" />
      <Btn />
      <GuessNum />
      <br />
      <InputComponet />
    </div>
  );
}

export default App;
