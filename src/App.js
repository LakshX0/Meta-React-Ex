import Btn from "./Btn.js";
import Heading from "./Heading.js";
import ModeToggler from "./ModeToggler";

function App() {
  return (
    <div className="App">
      <ModeToggler />
      <Heading firstName="Bob" />
      <Heading firstName="Machan" />
      <Btn />
    </div>
  );
}

export default App;
