import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function Heading() {
  return <h1>This is an h1 heading</h1>;
}

export default Heading;
