import { useEffect, useRef, useState } from "react";
import { ref, set, child, push, onValue, get } from "firebase/database";
import { dbRef } from "utils/database";
import "App.css";

function App() {
  return (
    <div className="App">
      <ul>
        {todoList?.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <input
        type="text"
        name="todo"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
