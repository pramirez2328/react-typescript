import { useState } from 'react';
import Heart from '../Heart/Heart';
import Button from '../Button/Button';
import styles from './App.module.css';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

function App() {
  const [color, setColor] = useState('primary');

  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };
  return (
    <div className={styles.container}>
      <Heart color={color} />
      <Button color={color} handleChange={handleColorChange} />
      <p>
        This is the <span className={styles.sizeFont}>{color}</span> color!
      </p>
    </div>
  );
}

export default App;
