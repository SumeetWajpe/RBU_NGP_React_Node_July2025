import { useEffect, useState } from "react";
import axios from "axios";
function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(function () {
    // ajax
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1> All Posts</h1>
      <ul>
        {posts.map(p => (
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
