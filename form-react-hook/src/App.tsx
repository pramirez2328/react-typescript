import { useForm } from 'react-hook-form';

import './App.css';
import { useState } from 'react';

type FormData = {
  name: string;
  lastname: string;
  age: number;
};

function App() {
  const [person, setPerson] = useState<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleOnSubmit = (data: FormData) => {
    setPerson(data);
  };

  console.log('errors', errors);
  return (
    <div className='App'>
      <form className='form' onSubmit={handleSubmit(handleOnSubmit)}>
        <h2>Form with React Hook Form</h2>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' {...register('name', { required: true, minLength: 3 })} />
        {errors.name?.type === 'required' && <p className='warning'>Name is required!</p>}
        {errors.name?.type === 'minLength' && <p className='warning'>Name should be more than 3 characters</p>}
        <label htmlFor='lastname'>Last Name:</label>
        <input id='lastname' type='text' {...register('lastname', { required: true, minLength: 3 })} />
        {errors.lastname?.type === 'required' && <p className='warning'>Last Name is required!</p>}
        {errors.lastname?.type === 'minLength' && <p className='warning'>Last Name should be more than 3 characters</p>}
        <label htmlFor='age'>Age:</label>
        <input id='age' type='number' {...register('age', { required: true })} min='1' />
        {errors.age?.type === 'required' && <p className='warning'>Age is required</p>}
        <input id='button' type='submit' />
      </form>
      <div className='result'>
        {person?.age && (
          <p style={{ textAlign: 'center', marginTop: '1em' }}>
            {person?.age >= 18 && 'Congratulations'} {person?.name} you are {person?.age < 18 && 'not '}
            allowed to drink!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
