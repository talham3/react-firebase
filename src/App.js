import { useEffect, useRef, useState } from "react";
import { ref, set, child, push, onValue, get } from "firebase/database";
import { dbRef } from "utils/database";
import { useGetData, useInsertData } from "hooks";
import "App.css";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const { isLoading, data } = useGetData("TodoList");
  const { isLoading: insertionLoading, mutate: handleSubmit } = useInsertData(
    "TodoList",
    todoList,
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  console.log(data, insertionLoading, isLoading);

  // useEffect(() => {
  //   onValue(ref(dbRef, "Todos"), (snapshot) => {
  //     const username = (snapshot.val() && snapshot.val()) || "Anonymous";
  //     console.log(username);
  //     // ...
  //   });

  // get(child(ref(db), "Todos"))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot?.val().text);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  // const handleSubmit = () => {
  // const _todoList = [...todoList] || [];
  // _todoList.push(value);
  // setTodoList([..._todoList]);
  // setValue("");
  // set(ref(db, "Todo"), {
  //   tood: value,
  // })
  // .then((result) => {
  //   console.log(result);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // };

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
