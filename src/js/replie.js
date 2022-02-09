import React from 'react';

import { useEffect, useState } from 'react';
const Replie = props => {
  const [Bonus, SetBonus] = useState(props.data.score);
  const [Show, setShow] = useState(false);
  const [text, settext] = useState('');
  const [updateInput, SetUpdateInput] = useState(false);
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
    Show ? setShow(false) : setShow(true);
  };
  const reply_to = () => {
    props.setreply(replies => [...replies, newReply]);
    setShow(false);
  };
  const Edit_comment = () => {
    props.data.content = text;
    SetUpdateInput(false);
  };

  return (
    <div>
      <div className="replie_container">
        <div className="score">
          <img
            src={'./icon-plus.svg'}
            onClick={() => {
              SetBonus(Bonus + 1);
              console.log(Bonus);
            }}
          />
          <p>{Bonus}</p>
          <img
            src={'./icon-minus.svg'}
            onClick={() => {
              SetBonus(Bonus + 1);
              console.log(Bonus);
            }}
          />
        </div>
        <div className="comment">
          <div className="comment_info">
            <img src={props.data.user.image.png} id="avatar" alt="avatar" />
            <h1 id="user_name">{props.data.user.username}</h1>
            {props.data.user.username == props.all.currentUser.username && (
              <p id="you_signage_reply">You</p>
            )}
            <p id="time_comment">{props.data.createdAt}</p>
            {!(props.data.user.username == props.all.currentUser.username) && (
              <button className="btn" onClick={addComment}>
                <img src={'./icon-reply.svg'} id="reply_img" />
                Reply
              </button>
            )}
            {props.data.user.username == props.all.currentUser.username && (
              <button
                className="btn"
                onClick={() => {
                  updateInput ? SetUpdateInput(false) : SetUpdateInput(true);
                }}
              >
                <img src={'./icon-edit.svg'} id="reply_img" />
                Edit
              </button>
            )}
            {props.data.user.username == props.all.currentUser.username && (
              <button className="btn_delete" onClick={addComment}>
                <img src={'./icon-delete.svg'} id="reply_img" />
                Delete
              </button>
            )}
          </div>
          {!updateInput && (
            <div className="paragraphe">
              <p id="user_content">{props.data.content}</p>
            </div>
          )}
          {updateInput && (
            <div className="updateInput">
              {' '}
              <textarea
                type="text"
                id="update_entry"
                placeholder="Add a comment..."
                onChange={handleChange}
              />
              <button id="btn_update" onClick={Edit_comment}>
                UPDATE
              </button>
            </div>
          )}
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
            onChange={handleChange}
          />
          <button id="btn_send" onClick={reply_to}>
            SEND
          </button>
        </div>
      )}
    </div>
  );
};
export default Replie;
