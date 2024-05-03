import './App.css';
import userData from './datas/userData.json';
import friends from './datas/friends.json';
import transactions from './datas/transactions.json';

import Profile from './components/profile/Profile';
import FriendList from './components/friendsList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
