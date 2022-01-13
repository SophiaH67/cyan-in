import 'tailwindcss/tailwind.css';
import background from '../../assets/img/bg.jpg';
import Users from './classes/Users';
import User from './components/User';

export default function App() {
  const users = new Users().getUsers();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
    >
      {users.map((user) => (
        <User key={user.name} user={user} onClick={() => {}} />
      ))}
    </div>
  );
}
