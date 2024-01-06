import { useState } from 'react';
import { message } from './message';

import './App.css';

function App() {
  const [expand, setExpand] = useState(true);
  const [chapter, setChapter] = useState(2);
  const [text, setText] = useState(message.split('.')[0] + '. ');

  const handleExpand = () => {
    let trimmedText = message.split('.').slice(0, chapter).join('.');
    if (trimmedText.length < message.length) {
      trimmedText += trimmedText.length < message.length - 1 ? '... ' : '.';
      setText(trimmedText);
      setChapter(chapter + 1);
    }
    if (trimmedText.length === message.length) {
      setExpand(false);
    }

    if (!expand) {
      setExpand(true);
      setChapter(2);
      setText(message.split('.')[0] + '. ');
    }
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleExpand}>{expand ? 'more' : 'clear'}</button>
    </div>
  );
}

export default App;
