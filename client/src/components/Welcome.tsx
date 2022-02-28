import React, { useState } from 'react';

const Welcome = () => {
  const [ username, setUsername ] = useState('');
  return (
    <>
      <h1>Welcome{ username ? ` ${username}` : ''}!</h1>
      <form>
        <p>What's your name?</p>
        <input type='text' onChange={e => setUsername( e.target.value ) } value={username} />
        <button>Start</button>
      </form>
    </>
  )
}

export default Welcome;
