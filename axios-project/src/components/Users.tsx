import { useEffect, useState } from 'react';
import api, { CanceledError } from '../api';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  website: string;
  phone: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await api.get<User[]>('/users', { signal: controller.signal });
        if (response && response?.data.length > 0) {
          setUsers(response.data);
        }
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as Error).message);
        setLoading(false);
      }
    };
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  const handleAdd = async () => {
    const originalUsers = [...users];
    try {
      const response = await api.post('/users', {
        id: new Date().getTime(),
        name: 'Pedro Ramirez',
        email: 'test@gmail.com',
        company: {
          name: 'ACME inc.',
          catchPhrase: 'test',
        },
        website: 'test.com',
        phone: '1234567890',
      });

      if (response.status === 201) {
        const newUser = response.data;
        setUsers([...users, newUser]);
      }
    } catch (error) {
      setUsers(originalUsers);
      setError((error as Error).message);
    }
  };

  const handleUpdate = async (id: number) => {
    const originalUsers = [...users];
    try {
      const response = await api.put(`/users/${id}`, {
        name: 'Peter Parker',
        email: 'this is a test',
      });

      if (response.status === 200) {
        const newUsers = users.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              name: 'Peter Parker',
              email: 'this is a test',
            };
          }
          return user;
        });
        setUsers(newUsers);
      }
    } catch (error) {
      setUsers(originalUsers);
      setError((error as Error).message);

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleDelete = async (id: number) => {
    const originalUsers = [...users];
    try {
      const response = await api.delete(`/users/${id}`);
      if (response.status === 200) {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
      }
    } catch (error) {
      setUsers(originalUsers);
      setError((error as Error).message);

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  console.log('users --->', users);
  return (
    <>
      {loading && (
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
      {error && <p className='text-danger text-center'>{error}</p>}
      <button className='btn btn-primary' onClick={handleAdd}>
        Add
      </button>
      <ul className='col-12 d-flex flex-row flex-wrap p-0'>
        {users.map((user) => {
          return (
            <div className='col-12 col-md-6 col-xl-4 p-3' key={user.id}>
              <div className='card p-3 d-flex flex-column h-100'>
                <h4 className='card-title text-center'> {user.name}</h4>
                <div className='card-body flex-grow-1 p-0'>
                  <p className='card-text'>Email: {user.email}</p>
                  <p className='card-text'>Company: {user.company.name}</p>
                  <p className='card-text'>Website: {user.website}</p>
                  <p className='card-text'>Phone: {user.phone}</p>
                  <p className='card-text'>Phrase: {user.company.catchPhrase}</p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                  <button className='btn btn-info' onClick={() => handleUpdate(user.id)}>
                    update
                  </button>
                  <button className='btn btn-danger align-self-end' onClick={() => handleDelete(user.id)}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
