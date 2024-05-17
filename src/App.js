import { useState } from "react";
import "./App.css";

function App() {
  // Declare state variables inside the component
  const [txt, setTxt] = useState('App');
  const [txtList, setTxtList] = useState([]);

  // Delete function
  const del = (i) => {
    txtList.splice(i, 1);
    setTxtList([...txtList]);
  };

  // Edit function
  const edit = (i) => {
    let newVal = prompt('Enter New Value');
    console.log(newVal);
    txtList.splice(i, 1, newVal);
    setTxtList([...txtList]);
  };

  return (
    <>
      <div>
        <input
          className="input"
          type="text"
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        ></input>
        <button
          className="addTodo"
          onClick={() => {
            setTxtList([...txtList, txt]);
            console.log(txtList);
          }}
        >
          Add
        </button>
        <button
          className="deleteAll"
          onClick={() => {
            setTxtList([]);
          }}
        >
          Delete All
        </button>
        {txtList.map((x, i) => {
          return (
            <p className="todoPara" key={i}>
              {x}{" "}
              <button className="deleteBtn" onClick={() => del(i)}>
                Delete
              </button>
              <button onClick={() => edit(i)} className="editBtn">
                Edit
              </button>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
