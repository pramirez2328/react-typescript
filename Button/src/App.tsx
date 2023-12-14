import { useState, useEffect } from 'react';
import Button from './components/Button';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.css';
const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const App = () => {
  const [color, setColor] = useState('primary');
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
  }, [color]);

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };
  return (
    <div
      className={`d-flex flex-column justify-content-center align-content-center mt-5  bg-${color} p-4`}
      style={{ border: '1px solid black' }}
    >
      <Button type={color} handleClick={handleClick}>
        {color}
      </Button>
      {show && <Alert color={color} onClose={() => setShow(false)} />}
    </div>
  );
};

export default App;
