import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../App';

type Post = {
  id: string;
  content: string;
};

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { token } = useContext(UserContext);
  useEffect(() => {
    axios
      .get<Post[]>('http://localhost:3000/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {posts.map((v) => (
        <div>test</div>
      ))}
    </div>
  );
};
