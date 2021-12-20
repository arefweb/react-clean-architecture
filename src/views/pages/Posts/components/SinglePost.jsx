import React from 'react'

const SinglePost = ({post}) => {
  return (
    <div key={post.id} className="col-md-4 SinglePost">
      <div className="SinglePost__box">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default SinglePost
