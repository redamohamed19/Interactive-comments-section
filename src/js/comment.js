import React from 'react';

import Replie from './replie';
import { useEffect, useState } from 'react';

const Comment = props => {
  const [Show, setShow] = useState(false);
  const [Bonus, SetBonus] = useState(props.data.score);
  const [reply_msg, Setreply_msg] = useState(props.data.replies);
  const [text, settext] = useState('');
  let newReply = {
    id: 5,
    content: text,
    createdAt: '1 min ago',
    score: 0,
    user: {
      image: {
        png: props.all.currentUser.image.png,
        webp: props.all.currentUser.image.webp
      },
      username: props.all.currentUser.username
    }
  };
  const handleChange = e => {
    settext(e.target.value);
  };
  const addComment = () => {
    console.log('hi');
    Show ? setShow(false) : setShow(true);
  };
  const reply_to = () => {
    Setreply_msg(replies => [...replies, newReply]);
  };

  return (
    <div className="Top_comment">
      <div className="com_container">
        <div className="score">
          <img
            src={'./icon-plus.svg'}
            onClick={() => {
              SetBonus(Bonus + 1);
              console.log(Bonus);
            }}
          />
          <p>{Bonus}</p>
          <img src={'./icon-minus.svg'} />
        </div>
        <div className="comment">
          <div className="comment_info">
            <img src={props.data.user.image.png} id="avatar" alt="avatar" />
            <h1 id="user_name">{props.data.user.username}</h1>
            {props.data.user.username == props.all.currentUser.username && (
              <p id="you_signage">You</p>
            )}
            <p id="time_comment">{props.data.createdAt}</p>
            <button className="btn" onClick={addComment}>
              <img src={'./icon-reply.svg'} id="reply_img" />
              Reply
            </button>
          </div>
          <div className="paragraphe">
            <p id="user_content">{props.data.content}</p>
          </div>
        </div>
      </div>
      {Show && (
        <div className="comment_input">
          <img
            src={props.all.currentUser.image.png}
            alt="avatar"
            id="avatar_send"
          />
          <textarea
            type="text"
            id="comment_entry"
            placeholder="Add a comment..."
            onChange={handleChange}
          />
          <button id="btn_send" onClick={reply_to}>
            SEND
          </button>
        </div>
      )}
      {reply_msg.map(replie => {
        return <Replie key={replie.id} data={replie} all={props.all} />;
      })}
    </div>
  );
};
export default Comment;
