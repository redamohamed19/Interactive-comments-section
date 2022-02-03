import React from 'react';
import img_avatar from '../imgs/avatars/image-amyrobson.png';
import img_reply from '../imgs/icon-reply.svg';
import plus from '../imgs/icon-plus.svg';
import minus from '../imgs/icon-minus.svg';
const Comment = () => {
  return (
    <div className="com_container">
      <div className="score">
        <img src={plus} />
        <p>12</p>
        <img src={minus} />
      </div>
      <div className="comment">
        <div className="comment_info">
          <img src={img_avatar} id="avatar" alt="avatar" />
          <h1 id="user_name">AmyRobson</h1>
          <p id="time_comment">1 month ago</p>
          <button className="btn">
            <img src={img_reply} id="reply_img" />
            Reply
          </button>
        </div>
        <div className="paragraphe">
          <p id="user_content">
            impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
