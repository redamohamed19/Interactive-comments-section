import React from 'react';
import img_avatar from '../imgs/avatars/image-amyrobson.png';
import img_reply from '../imgs/icon-reply.svg';
import plus from '../imgs/icon-plus.svg';
import minus from '../imgs/icon-minus.svg';
import Replie from './replie';
import { useEffect, useState } from 'react';

const Comment = props => {
  return (
    <div className="Top_comment">
      <div className="com_container">
        <div className="score">
          <img src={plus} />
          <p>{props.data.score}</p>
          <img src={minus} />
        </div>
        <div className="comment">
          <div className="comment_info">
            <img src={img_avatar} id="avatar" alt="avatar" />
            <h1 id="user_name">{props.data.user.username}</h1>
            {props.data.user.username == props.all.currentUser.username && (
              <p id="you_signage">You</p>
            )}
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
      {props.data.replies.map(replie => {
        return <Replie key={replie.id} data={replie} all={props.all} />;
      })}
    </div>
  );
};
export default Comment;
