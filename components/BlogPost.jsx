import React from 'react';
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <article style={{ maxWidth: '800px', margin: '60px auto', textAlign: 'center' }}>
      <h1>Content Coming Soon</h1>
      <p style={{ color: '#666' }}>
        This blog post is under preparation and will be updated shortly.
      </p>

      <a
        href="/"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          fontWeight: 700,
          color: '#360f5a',
          textDecoration: 'none'
        }}
      >
        ← Back to Home
      </a>
    </article>
  );
};

export default BlogPost;