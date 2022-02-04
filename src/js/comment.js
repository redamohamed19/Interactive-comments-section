import React from 'react';
import img_avatar from '../imgs/avatars/image-amyrobson.png';
import img_reply from '../imgs/icon-reply.svg';
import plus from '../imgs/icon-plus.svg';
import minus from '../imgs/icon-minus.svg';
import Replie from './replie';

const Comment = props => {
  return (
    <div>
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
        return <Replie key={replie.id} data={replie} />;
      })}
    </div>
  );
};
export default Comment;
