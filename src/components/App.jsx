import { Profile } from './Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './Friendlist/Friendlist';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from '../data.json';
import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
