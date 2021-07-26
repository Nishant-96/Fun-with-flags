import React, { useState } from "react";

import "./styles.css";

const flagDictionary = {
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait"
};

var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  const [countryName, setCountryName] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    var countryName = flagDictionary[userInput];

    if (countryName === undefined) {
      countryName = "We don't have this in our database";
    }
    setCountryName(countryName);
  }

  function clickHandler(flags) {
    var countryName = flagDictionary[flags];
    setCountryName(countryName);
  }

  return (
    <div className="App">
      <h1>Fun With Flags</h1>
      <input
        onChange={changeHandler}
        placeholder="enter flag icon or click on below ones"
      ></input>
      <h2>{countryName}</h2>

      {flagsWeKnow.map((flags) => {
        return (
          <span
            onClick={() => clickHandler(flags)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
            key={flags}
          >
            {flags}
            {"  "}
          </span>
        );
      })}
    </div>
  );
}
