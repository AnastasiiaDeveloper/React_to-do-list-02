import { useState } from "react";
import "./App.css";
import MainBlockInput from "./components/main-page/main-page";
import ListOfPosts from "./components/rendering/list";
// import { } from 'uuid'

function App() {
  const [arrayList, setArrayList] = useState([]);
  const removeItem = (id) => {
    console.log(id);
    setArrayList((beforeArray) => beforeArray.filter((el) => el.id !== id));
  };
  const addItem = ({ post, comment }) => {
    setArrayList((beforeArray) => [
      { id: new Date().getMilliseconds(), post, comment },
      ...beforeArray,
    ]);
  };
  return (
    <div className="App">
      <div className="center">
        <MainBlockInput addItem={addItem} />
        <ListOfPosts arrayList={arrayList} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
