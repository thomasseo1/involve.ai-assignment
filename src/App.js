import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar.jsx";
import generate from "./utils/generate";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [exampleEmail, setExampleEmail] = useState("");

  //function that updates the name state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //function that updates the email state
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //function that sends all the necessary information to the generate function for calling the api
  const handleGenerateClick = async () => {
    const result = await generate(name, email, new Date());
    setExampleEmail(result);
  };

  return (
    <div className="App">
      <h2>MeetQuickly</h2>
      <input
        type="text"
        placeholder="Enter name"
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Enter Email"
        required
        value={email}
        onChange={handleEmailChange}
      ></input>
      <div>
        <Calendar />
      </div>
      <div>{exampleEmail && <textarea value={exampleEmail} readOnly />}</div>
      <button onClick={handleGenerateClick}>Generate</button>
    </div>
  );
};

export default App;
