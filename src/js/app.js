import React from 'react';
import img_avatar from '../imgs/avatars/image-amyrobson.png';
import img_avatar1 from '../imgs/avatars/image-ramsesmiron.png';
import img_avatar2 from '../imgs/avatars/image-juliusomo.png';
import img_avatar3 from '../imgs/avatars/image-maxblagun.png';
import img_reply from '../imgs/icon-reply.svg';
import plus from '../imgs/icon-plus.svg';
import minus from '../imgs/icon-minus.svg';
import deletee from '../imgs/icon-delete.svg';
import edit from '../imgs/icon-edit.svg';

import { render } from 'react-dom';
import Comment from './comment';
import '../css/style.css';
import '../css/replie.css';
import data from '../data/data.json';

import { useRef, useState } from 'react';

const App = () => {
  const [text, settext] = useState('');

  const handleChange = e => {
    settext(e.target.value);
  };
  const [rerender, setRerender] = useState([data][0].comments);
  let newComment = {
    id: text.length * 4,
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
        return (
          <Comment
            key={x.id}
            id={x.id}
            data={x}
            all={[data][0]}
            rerender={rerender}
            setRerender={setRerender}
          />
        );
      })}
      <div className="comment_input">
        <img src={data.currentUser.image.png} alt="avatar" id="avatar_send" />
        <textarea
          type="text"
          id="comment_entry"
          placeholder="Add a comment..."
          onChange={handleChange}
        />
        <button id="btn_send" onClick={addComment}>
          SEND
        </button>
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
