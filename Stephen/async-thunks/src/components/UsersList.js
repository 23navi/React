import { fetchUsers, addUser } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";
function UsersList() {
  const dispatch = useDispatch();
  const useSelectorRes = useSelector((state) => state.users);
  console.log({ useSelectorRes });
  const { isLoading, data, error } = useSelectorRes;

  useEffect(() => {
    console.log("This is running");
    dispatch(fetchUsers());
  }, [dispatch]);

  const fetchUsersHandler = () => {
    dispatch(fetchUsers());
  };

  if (isLoading) {
    return <SkeletonLoader times={5} className="h-10 w-full"></SkeletonLoader>;
  }
  if (error) {
    return (
      <div>
        Error<button onClick={fetchUsersHandler}>clickMe</button>
      </div>
    );
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
    dispatch(addUser());
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
