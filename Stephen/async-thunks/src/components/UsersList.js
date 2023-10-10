import { fetchUsers, addUser } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import { useState } from "react";

function useAsyncThunk(fetchUsers) {
  const dispatch = useDispatch();
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [errorLoadingUsers, setErrorLoadingUsers] = useState(null);

  const doSomethingAsync = () => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((error) => {
        setErrorLoadingUsers(error);
      })
      .finally(() => {
        setIsLoadingUsers(false);
      });
  };
  return [doSomethingAsync, isLoadingUsers, errorLoadingUsers];
}

function UsersList() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.users);

  const [doSomethingAsync, isLoadingUsers, errorLoadingUsers] =
    useAsyncThunk(fetchUsers);

  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [errorCreatingUser, setErrorCreatingUser] = useState(null);

  useEffect(() => {
    doSomethingAsync();
  }, [doSomethingAsync]);

  if (isLoadingUsers) {
    return <SkeletonLoader times={5} className="h-10 w-full"></SkeletonLoader>;
  }
  if (errorLoadingUsers) {
    console.log({ errorLoadingUsers });
    return <div>Error</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  const handleAddUser = (event) => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((error) => {
        setErrorCreatingUser(error);
      })
      .finally(() => {
        setIsCreatingUser(false);
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleAddUser}>+ Add Users</Button>
      </div>

      <div>{renderedUsers}</div>
    </div>
  );
}
export default UsersList;
