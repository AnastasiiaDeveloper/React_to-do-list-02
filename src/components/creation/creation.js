import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkObjForData } from "./../../redux/actions/action";
import "./creation.css";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [comment, setComment] = useState("");

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  const actionForPost = (event) => {
    setPost(event.target.value);
  };
  const actionForComment = (event) => {
    setComment(event.target.value);
  };

  const handler = (infoForPost, infoForComment) => {
    dispatch(thunkObjForData(infoForPost, infoForComment));
  };

  const sendDataToRedux = () => {
    handler(post, comment, posts);
  };

  return (
    <div className="block">
      <div className="form-group">
        <label className="post">Post</label>
        <input
          type="text"
          className="form-control"
          onChange={actionForPost}
          value={post}
        />
      </div>
      <div className="form-group">
        <label className="comment">Comment</label>
        <input
          type="text"
          className="form-control"
          onChange={actionForComment}
          value={comment}
        />
      </div>
      <button className="btn-dark" onClick={() => sendDataToRedux()}>
        Create post
      </button>
    </div>
  );
};

export default CreatePost;
