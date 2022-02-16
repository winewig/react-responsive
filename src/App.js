import React, { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  ); /* initialize is necessray for the first render */

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        console.log("Remove resize listner");
      });
    };
  }, []);

  return <div className="App">The window width is {`${windowWidth}`}</div>;
}

export default App;
