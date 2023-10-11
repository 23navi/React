import { fetchUsers, addUser } from "../store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
import useAsyncThunk from "../hooks/useAsyncThunk";

function UsersList() {
  const { data } = useSelector((state) => state.users);

  const [doFetchUsers, isLoadingUsers, errorLoadingUsers] =
    useAsyncThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, errorCreatingUser] =
    useAsyncThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  let content;
  if (isLoadingUsers) {
    content = (
      <SkeletonLoader times={5} className="h-10 w-full"></SkeletonLoader>
    );
  } else if (errorLoadingUsers) {
    content = <div>Error</div>;
  } else {
    content = data.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
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
