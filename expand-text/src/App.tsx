import { useState } from 'react';
import { book } from './book';
import './App.css';

function App() {
  const [expand, setExpand] = useState(true);
  const [chapter, setChapter] = useState(2);
  const [text, setText] = useState(book.split('.')[0] + '. ');

  const handleExpand = () => {
    let trimmedText = book.split('.').slice(0, chapter).join('.');

    if (trimmedText.length < book.length) {
      trimmedText += trimmedText.length < book.length - 1 ? '... ' : '.';
      setText(trimmedText);
      setChapter(chapter + 1);
    }

    if (trimmedText.length === book.length) {
      setExpand(false);
    }

    if (!expand) {
      setExpand(true);
      setChapter(2);
      setText(book.split('.')[0] + '. ');
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
