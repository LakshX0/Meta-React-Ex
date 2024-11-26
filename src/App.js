import Btn from "./Btn.js";
import Heading from "./Heading.js";
import ModeToggler from "./ModeToggler";
import GuessNum from "./GuessNum";

function App() {
  return (
    <div className="App">
      <ModeToggler />
      <Heading firstName="Bob" />
      <Heading firstName="Machan" />
      <Btn />
      <GuessNum />
    </div>
  );
}

export default App;
