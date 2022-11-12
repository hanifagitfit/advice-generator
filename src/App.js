import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import safed from "./images/safed.png";


import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);
    setText(data.slip);
  }

  useEffect(() => {
    fetchAdvice()
  }, [])
  return (
    <>
      <img className="cat" src={safed} alt="cat" />
      <div className="container">
        <div className="advice">
          <h4>advice #{text.id} </h4>
          <p>{text.advice}</p>
        </div>
        <div className="buttonArea">
          <img id="divider" src={divider} alt="" />
          <div className="palybtn" onClick={fetchAdvice}>
            <img src={dice} alt="" />
          </div>
        </div>
      </div>
    </>
  );

}

export default App;
