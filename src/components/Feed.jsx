import React from "react";
import PostItem from "./Sidebar";

export default function PostList({ posts }) {
  if (posts.length === 0) return <p>Chưa có bài viết nào.</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

