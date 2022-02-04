import React from 'react';
import img_avatar from '../imgs/avatars/image-amyrobson.png';
import img_reply from '../imgs/icon-reply.svg';
import plus from '../imgs/icon-plus.svg';
import minus from '../imgs/icon-minus.svg';
import { useEffect, useState } from 'react';
const Replie = props => {
  useEffect(() => {
    console.log(props.data.user.username);
    console.log(props.all.currentUser.username);
    if (props.data.user.username == props.all.currentUser.username) {
      document.getElementById('you_signage_reply').style.display = 'block';
      console.log('there');
    }
  }, [props]);
  return (
    <div className="replie_container">
      <div className="score">
        <img src={plus} />
        <p>{props.data.score}</p>
        <img src={minus} />
      </div>
      <div className="comment">
        <div className="comment_info">
          <img src={img_avatar} id="avatar" alt="avatar" />
          <h1 id="user_name">{props.data.user.username}</h1>
          <p id="you_signage_reply">You</p>
          <p id="time_comment">{props.data.createdAt}</p>
          <button className="btn">
            <img src={img_reply} id="reply_img" />
            Reply
          </button>
        </div>
        <div className="paragraphe">
          <p id="user_content">{props.data.content}</p>
        </div>
      </div>
    </div>
  );
};
export default Replie;
