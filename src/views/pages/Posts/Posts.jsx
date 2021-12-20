import React from 'react';
import SinglePost from './components/SinglePost';

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <div className="row Posts">
        {posts.length === 0 && <h3>No Posts Yet! Bring posts </h3>}
        {posts.map((post, i) => {
          return <SinglePost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Posts
