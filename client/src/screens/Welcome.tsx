import { FormEvent, useState } from 'react';
import { setUserName } from '@/store/userSlice';
import { useDispatch } from 'react-redux';

const Welcome = () => {
  const [ username, setUsername ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(setUserName(username));
  };

  return (
    <>
      <h1>Welcome{ username ? ` ${username}` : ''}!</h1>
      <form onSubmit={handleSubmit}>
        <p>What's your name?</p>
        <input type='text' onChange={e => setUsername( e.target.value ) } value={username} />
        <button>Start</button>
      </form>
    </>
  )
}

export default Welcome;
