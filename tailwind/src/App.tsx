import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { WiEarthquake } from 'react-icons/wi';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div className='w-6/12 h-80 bg-red-100 flex flex-col justify-center items-center border-8 border-red-500 rounded-lg'>
        <h1 className='text-3xl font-bold text-center text-gray-500'>Hello world!</h1>
        <button
          className='border-4 border-white rounded-lg px-10 py-1 bg-teal-50 text-lime-700'
          onClick={() => setCount(count + 1)}
        >
          click
        </button>
        <p className='text-red'>{count}</p>
        <div className='flex flex-row-reverse'>
          <p className=''> Processing...</p>

          <svg className='animate-bounce h-5 w-5 mt-2' viewBox='0 0 24 24'>
            <FaArrowLeft />
          </svg>
        </div>
        <div className='text-7xl text-teal-500'>
          <WiEarthquake />
        </div>
      </div>
    </div>
  );
}

export default App;
