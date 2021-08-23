// import { useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../redux/actions/action";
import "./list.css";

const ListOfPosts = () => {
  const posts = useSelector((state) => state.posts.items);

  const [postItems, setPostItems] = useState([]);
  const dispatch = useDispatch();

  const removeItem = useCallback((id) => {
    dispatch(removePost(id));
  }, []);

  const deleteItem = (id) => {
    removeItem(id);
  };

  useEffect(() => {
    setPostItems(posts);
  }, [posts]);

  const postList = postItems.map(({ id, post, comment }) => {

  // const postList = posts.map(({ post, comment }) => {
    return (
      <ul className="items" key={"key-" + post}>
        <li className="post">{post}</li> <li className="comment"> {comment}</li>
        <button className="remove-btn" onClick={() => deleteItem(id)}>
          X
        </button>
      </ul>
    );
  });

  if (posts.length === 0) {
    return <div>Добавленных постов пока никаких нет</div>;
  }
  return <div className="todo-list">{postList}</div>;
};
export default ListOfPosts;
