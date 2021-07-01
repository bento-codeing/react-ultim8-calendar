import React      from "react";
import EntryPoint from "./pkg";

function App() {
  return (
    <div className="App">
      <EntryPoint locale={"fr"} classNamePrefix={"testinter"}/>
    </div>
  );
}

export default App;
