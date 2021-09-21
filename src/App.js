import { useState } from "react";
import "./styles.css";

var heading = "emoji recognition";

const emojiDictionary = {
  "🤔": "thinking face",
  "😐": "Neutral Face",
  "🐵": "Monkey Face",
  "🍌": "Banana",
  "🏘️": "Houses",
  "🏖️": "Beach with Umbrella",
  "🏋️‍♂️": "Man Lifting Weights",
  "💝": "Heart with Ribbon",
  "🚫": "Prohibited",
  "⛔": "No Entry"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("faliure to reconize the emoji");
    }
  }
  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>{heading}</h1>
      <h2>
        Enter the <span style={{ color: "red" }}>Emoji</span> to Get the Meaning
      </h2>
      <input onChange={emojiInputHandler}></input>
      <h2 style={{ color: "green" }}>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
