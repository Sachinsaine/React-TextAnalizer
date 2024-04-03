import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };
  const handleLowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  };
  const handleClearText = () => {
    let emptyString = "";
    setText(emptyString);
  };

  const handleCopyText = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveSpaces = () => {
    let myText = text.split(/[ ]+/);
    setText(myText.join(" "));
  };

  return (
    <div>
      <div className="container">
        <h1 className="my-3">Enter Something To Analize Below</h1>
        <div>
          <textarea
            className="form-control"
            rows={10}
            value={text}
            id="mybox"
            onChange={handleOnChange}
            placeholder="Enter something here..."
          >
            Enter your text here...
          </textarea>
        </div>
        <div>
          <button
            onClick={handleUpperCase}
            className="btn btn-primary my-3 me-2"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={handleLowerCase}
            className="btn btn-primary my-3 me-2"
          >
            Convert to Lowercase
          </button>
          <button
            onClick={handleClearText}
            className="btn btn-primary my-3 me-2"
          >
            Clear Text
          </button>
          <button
            onClick={handleCopyText}
            className="btn btn-primary my-3 me-2"
          >
            Copy Text{" "}
          </button>
          <button
            onClick={handleRemoveSpaces}
            className="btn btn-primary my-3 me-2"
          >
            Remove Entire Spaces
          </button>
        </div>
        <div>
          <h3>Your Text Summary</h3>
          <div>
            {text.split(" ").length} Words & {text.length} Characters.
          </div>
          <div>{0.08 * text.split(" ").length} Minutes to read.</div>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
