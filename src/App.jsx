import './App.css';
import userData from './datas/userData.json';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <>
      <Profile {...userData} />
    </>
  );
};

export default App;
