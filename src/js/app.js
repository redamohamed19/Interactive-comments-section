import React from 'react';
import { render } from 'react-dom';
import Comment from './comment';
import '../css/style.css';
import '../css/replie.css';
import data from '../data/data.json';
import img_avatar from '../imgs/avatars/image-maxblagun.png';
import { useEffect, useState } from 'react';
var v = [data];

const App = () => {
  const [rerender, setRerender] = useState(v[0].comments);

  console.log('rerender');
  var x = 0;

  useEffect(() => {
    document.getElementById('btn_send').onclick = function() {
      v[0].comments.push({
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: '1 month ago',
        score: 12,
        user: {
          image: {
            png: './images/avatars/image-amyrobson.png',
            webp: './images/avatars/image-amyrobson.webp'
          },
          username: 'amyrobson'
        },
        replies: []
      });
      setRerender(v[0].comments);
      x++;

      console.log(rerender);
    };
  }, []);
  return (
    <div className="container">
      {x}
      {rerender.map(x => {
        return <Comment key={x.id} data={x} />;
      })}
      <div className="comment_input">
        <img src={img_avatar} alt="avatar" id="avatar_send" />
        <textarea
          type="text"
          id="comment_entry"
          placeholder="Add a comment..."
        />
        <button id="btn_send">SEND</button>
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
