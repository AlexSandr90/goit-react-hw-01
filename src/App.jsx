import './App.css';
import userData from './datas/userData.json';
import friends from './datas/friends.json';
import Profile from './components/profile/Profile';
import FriendList from './components/friendsList/FriendList';


const App = () => {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
