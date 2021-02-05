import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = (_) => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const [comments, setComments] = useState([]);

  const getAllComments = () => {
    axios
      .get(url)
      .then((response) => {
        const allComments = response.data;

        setComments(allComments);
        console.log(comments);
      })
      .catch((error) => console.error(error));
  };

  const listComments = comments.map((comment) => (
    <span>
      {comment.id}: {comment.email}
      <br />
    </span>
  ));
  // useEffect(() => {
  //   getAllComments();
  // }, []);

  const handleClick = () => {
    getAllComments();
  };

  return (
    <BrowserRouter>
      <div className="container">
        <div></div>
        <div className="inner-container">
          <div className="box">{listComments}</div>
          <div className="button" onClick={handleClick}>
            Pull Data
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
