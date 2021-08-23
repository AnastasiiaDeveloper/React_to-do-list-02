// import { useSelector } from "react-redux";
import React from "react";
import "./list.css";

const ListOfPosts = ({ arrayList, removeItem }) => {
  console.log("arrayList", arrayList);
  if (arrayList.length === 0) {
    return <div>Добавленных постов пока никаких нет</div>;
  }

  const postList = arrayList.map(({ id, post, comment }) => {
    return (
      <ul className="items" key={"key-" + id}>
        <li className="post">{post}</li> <li className="comment"> {comment}</li>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          X
        </button>
      </ul>
    );
  });

  return <div className="todo-list">{postList}</div>;
};
export default ListOfPosts;
