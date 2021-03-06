import React from 'react';

import Replie from './replie';
import { useEffect, useState } from 'react';

const Comment = props => {
  const [Show, setShow] = useState(false);
  const [Bonus, SetBonus] = useState(props.data.score);
  const [reply_msg, Setreply_msg] = useState(props.data.replies);
  const [text, settext] = useState('');
  const [updateInput, SetUpdateInput] = useState(false);
  const [showmodal, Setshowmodal] = useState(false);

  let newReply = {
    id: text.length * 7,
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

  const remove = () => {
    const num = props.id;
    let arr = props.rerender;
    arr = arr.filter(el => el.id !== num);
    console.log(props.rerender);
    props.setRerender(old => arr);

    Setshowmodal(false);
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
    setShow(false);
  };
  const Edit_comment = () => {
    props.data.content = text;
    SetUpdateInput(false);
  };

  return (
    <div className="Top_comment">
      {showmodal && (
        <div className="modal_wraper">
          <h1>Delete comment</h1>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="modal_btn">
            <button id="delete" onClick={remove}>
              Yes,DELETE
            </button>
            <button
              id="cancel"
              onClick={() => {
                Setshowmodal(false);
              }}
            >
              NO,CANCEL
            </button>
          </div>
        </div>
      )}

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
              <button
                className="btn_delete"
                onClick={() => {
                  Setshowmodal(true);
                }}
              >
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
        return (
          <Replie
            key={replie.id}
            id={replie.id}
            setreply={Setreply_msg}
            replie={reply_msg}
            data={replie}
            all={props.all}
          />
        );
      })}
    </div>
  );
};
export default Comment;
