import React, { useEffect } from "react";
import "./App.css";
import Main from "./components/main/main";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
