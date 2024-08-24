import Counter from "./components/counter";
import Welcome from "./components/welcome"
import React from "react";
//props is read only
//state is cna store data that can change over time
function App() {


  return (
    <>
      <div><Welcome name="Alice" /> <Welcome name="Bob" />
      </div>
      <Counter></Counter>
    </>
  );
}

export default App
