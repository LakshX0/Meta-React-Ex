function ModeToggler() {
  let darkModeOn = true;
  let header = <h1 className="header"></h1>;
  const darkMode = <h1>Dark mode activated!</h1>;
  const lightMode = <h1>Light mode activated!</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn == true) {
      console.log("Dark mode on!");
    } else {
      console.log("Light mode on!");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
}
export default ModeToggler;
