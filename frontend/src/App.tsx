import React from 'react';
import { emojis } from './emoji';

import logo from './assets/logo.svg';


const App = () => {
  const [selectedEmoji, setSelectedEmoji] = React.useState(emojis[0]);

  const showRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setSelectedEmoji(emojis[randomIndex]);
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo"></img>
      <h1>Emoji of the Day</h1>
      
      <div className="emoji-container">
        <div className="emoji">{selectedEmoji.icon}</div>
        <div className="emoji-name">{selectedEmoji.name}</div>
        {/* 다른 이모지 보기 기능을 추가했어요 */}
        <button onClick={showRandomEmoji}>See other emoji</button>
      </div>
    </div>
  );
};

export default App;