import { useState } from "react";
import { colorContext } from "./context";
import Child from "./child";

function App() {
  const [color, setcolor] = useState("#000000");
  return (
    <>
      <h1>PICK A COLOR</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      ></input>
      <colorContext.Provider value={color}>
        <Child />
      </colorContext.Provider>
    </>
  );
}

export default App;
