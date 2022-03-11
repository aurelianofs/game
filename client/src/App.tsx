import Welcome from '@/screens/Welcome'
import { useSelector } from 'react-redux'
import { userState } from '@/store/userSlice'
import Lobby from './screens/Lobby';

const App = () => {
  const user = useSelector( userState );
  console.log(user);
  return (
    <>
      {
        user.name ?
        <Lobby />
        :
        <Welcome />
      }
    </>
  );
}

export default App;
