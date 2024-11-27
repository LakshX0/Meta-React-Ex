import { useState } from "react";

export default function InputComponet() {
  const [inputText, setText] = useState("Hello");

  function HandleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input value={inputText} onChange={HandleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("Hello")}>Reset</button>
    </>
  );
}
