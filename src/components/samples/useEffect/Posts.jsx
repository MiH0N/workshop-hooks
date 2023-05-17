import { useEffect, useState } from 'react';

const Posts = () => {
  const [postId, setPostId] = useState(null);
  return (
    <div className='post-list'>
      <div>
        {[...Array(4)].map((item, index) => (
          <a
            key={index}
            onClick={() => setPostId(index + 1)}
            style={{ display: 'block', cursor: 'pointer' }}>
            post {index + 1}
          </a>
        ))}
      </div>
      <div className='post-detail'>
        <GetPost id={postId} />
      </div>
    </div>
  );
};

const GetPost = ({ id }) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function fetchPost(id) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const fetchedPost = await response.json();
      setPost(fetchedPost);
    }
    if (id !== null) fetchPost(id);
  }, [id]);

  return (
    <div style={{ padding: '0 1rem' }}>
      {!!id && !!post ? (
        <>
          {' '}
          <h6>{post?.title}</h6>
          <p>{post?.body}</p>
        </>
      ) : (
        <div>Not post :(</div>
      )}
    </div>
  );
};

export default Posts;
