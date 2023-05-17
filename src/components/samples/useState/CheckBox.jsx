import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <div>
      <label>
        <input type='checkbox' checked={liked} onChange={handleChange} />I liked this
      </label>
      <button
        style={{
          background: liked ? 'red' : 'blue',
          margin: '1rem',
        }}>
        {liked ? <>🤍</> : <>💚</>}
      </button>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  );
}
