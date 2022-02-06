import React from 'react';

import { useEffect, useState } from 'react';
const Replie = props => {
  const addComment = () => {
    Show ? setShow(false) : setShow(true);
  };
  const [Show, setShow] = useState(false);
  return (
    <div>
      <div className="replie_container">
        <div className="score">
          <img src={'./icon-plus.svg'} />
          <p>{props.data.score}</p>
          <img src={'./icon-minus.svg'} />
        </div>
        <div className="comment">
          <div className="comment_info">
            <img src={props.data.user.image.png} id="avatar" alt="avatar" />
            <h1 id="user_name">{props.data.user.username}</h1>
            {props.data.user.username == props.all.currentUser.username && (
              <p id="you_signage_reply">You</p>
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
        <div id="reply_to_reply">
          <img
            src={props.all.currentUser.image.png}
            alt="avatar"
            id="avatar_send"
          />
          <textarea
            type="text"
            id="comment_entry"
            placeholder="Add a comment..."
          />
          <button id="btn_send">SEND</button>
        </div>
      )}
    </div>
  );
};
export default Replie;
