import "./App.css";
import MainBlockInput from "./components/main-page/main-page";
import ListOfPosts from "./components/rendering/list";


function App() {
  return (
    <div className="App">
      <div className="center">
        <MainBlockInput />
        <ListOfPosts/>
      </div>
    </div>
  );
}

export default App;

