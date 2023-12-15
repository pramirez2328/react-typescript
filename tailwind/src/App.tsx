import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-100 bg-tail'>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
