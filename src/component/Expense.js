import { useState } from "react";

function Expense(props) {
  let [newTitle, setNewTitle] = useState("");
  let [title, setTitle] = useState("kashif");
  let [course, setCourse] = useState("Electrical Engineer");
  const clickHandler = () => {
    setTitle(newTitle);
    setCourse("Civil Engineer");
  };
  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  // const date = new Date("08/07/2020");
  return (
    <div>
      <div>
        <p>Passsout:{props.date.toLocaleDateString()}</p>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{course}</p>
      </div>
      <input type="Text" value={newTitle} onChange={changeHandler}></input>
      <button onClick={clickHandler}> change Data</button>
    </div>
  );
}
export default Expense;
