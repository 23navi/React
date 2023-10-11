import { fetchUsers, addUser, deleteUser } from "../store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import useAsyncThunk from "../hooks/useAsyncThunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const { data } = useSelector((state) => state.users);

  const [doFetchUsers, isLoadingUsers, errorLoadingUsers] =
    useAsyncThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, errorCreatingUser] =
    useAsyncThunk(addUser);

  const [doDeletUser, isDeletingUser, errorDeletingUser] =
    useAsyncThunk(deleteUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  useEffect(() => {
    doDeletUser({ id: 1 });
  }, [doDeletUser]);

  let content;
  if (isLoadingUsers) {
    content = (
      <SkeletonLoader times={5} className="h-10 w-full"></SkeletonLoader>
    );
  } else if (errorLoadingUsers) {
    content = <div>Error</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  const handleAddUser = (event) => {
    doCreateUser();
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleAddUser}>+ Add Users</Button>
      </div>

      <div>{content}</div>
    </div>
  );
}
export default UsersList;
