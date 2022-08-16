import Expense from "./component/Expense";
import "./styles.css";

export default function App() {
  let data = [
    {
      date: new Date("08/05/2020"),
      title: "kashif",
      course: "Electrical Engineer"
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Expense
        date={data[0].date}
        title={data[0].title}
        course={data[0].course}
      />
    </div>
  );
}
