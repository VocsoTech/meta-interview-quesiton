import "./styles.css";
import Action from "./components/Action";
import List from "./components/List";
export default function App() {
  return (
    <div className="App flex">
      <List />
      <Action />
      <List />
    </div>
  );
}
