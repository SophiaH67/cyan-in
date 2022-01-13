/* eslint-disable jsx-a11y/click-events-have-key-events */
import UserClass from '../classes/User';

interface Props {
  user: UserClass;
  onClick: () => void;
}

export default function User({ user, onClick }: Props) {
  return (
    <button onClick={onClick} type="button">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-32 h-32 rounded-full"
      />
    </button>
  );
}
