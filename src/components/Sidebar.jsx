import React from "react";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <Post
        username="John Doe"
        content="Hello, this is my first post!"
      />
      <Post
        username="Jane Smith"
        content="Nice to meet you all!"
      />
      {/* Thêm nhiều Post hơn nếu muốn */}
    </div>
  );
}

export default Feed;