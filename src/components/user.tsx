import { observer } from "mobx-react-lite";
import { useStore } from "../store/root-store-context";
import { useEffect } from "react";
import { TUser } from "../store/userStore";

const User = () => {
  const {
    userStore: { users, getUsersAction },
  } = useStore();

  useEffect(() => {
    getUsersAction();
  }, []);

  if (!users) {
    return null;
  }

  if (users?.state === "pending") {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {(users?.value as TUser[]).map((user: TUser) => {
        return <li key={user.id}>{user.email}</li>;
      })}
    </ul>
  );
};

export default observer(User);
