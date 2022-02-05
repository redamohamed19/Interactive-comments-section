import React from 'react';
import { render } from 'react-dom';
import Comment from './comment';
import '../css/style.css';
import '../css/replie.css';
import data from '../data/data.json';
import img_avatar from '../imgs/avatars/image-maxblagun.png';
import { useRef, useState } from 'react';

const App = () => {
  const [text, settext] = useState('');

  const handleChange = e => {
    settext(e.target.value);
  };
  const [rerender, setRerender] = useState([data][0].comments);
  let newComment = {
    id: [data][0].comments[[data][0].comments.length - 1].id++,
    content: text,
    createdAt: '1 min ago',
    score: 0,
    user: {
      image: {
        png: data.currentUser.image.png,
        webp: data.currentUser.image.webp
      },
      username: data.currentUser.username
    },
    replies: []
  };

  const addComment = () => {
    setRerender(comments => [...comments, newComment]);
  };
  return (
    <div className="container">
      {rerender.map(x => {
        return <Comment key={x.id} data={x} all={[data][0]} />;
      })}
      <div className="comment_input">
        <img src={img_avatar} alt="avatar" id="avatar_send" />
        <textarea
          type="text"
          id="comment_entry"
          onChange={handleChange}
          placeholder="Add a comment..."
        />
        <button id="btn_send" onClick={addComment}>
          SEND
        </button>
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
