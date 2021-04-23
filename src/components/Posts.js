import React from "react";

const Posts = ({ posts }) => {
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post._id} className="list-group-item">
          {post.name}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
