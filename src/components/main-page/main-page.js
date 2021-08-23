import CreatePost from "./../creation/creation";

const MainBlockInput = ({ addItem }) => {
  return (
    <div>
      <div className="mainAdd">
        <CreatePost addItem={addItem} />
      </div>
    </div>
  );
};
export default MainBlockInput;
