import React, { useState } from "react";
import "./creation.css";

const CreatePost = ({ addItem }) => {
  const [post, setPost] = useState("");
  const [comment, setComment] = useState("");

  const changedForPost = (event) => {
    setPost(event.target.value);
  };
  const changedForComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="block">
      <div className="form-group">
        <label className="post">Post</label>
        <input
          type="text"
          className="form-control"
          onChange={changedForPost}
          value={post}
        />
      </div>
      <div className="form-group">
        <label className="comment">Comment</label>
        <input
          type="text"
          className="form-control"
          onChange={changedForComment}
          value={comment}
        />
      </div>
      <button
        className="btn-dark"
        onClick={() => {
          addItem({ post, comment });
        }}
      >
        Create post
      </button>
    </div>
  );
};

export default CreatePost;
