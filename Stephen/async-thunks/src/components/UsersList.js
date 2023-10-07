import { fetchUsers, addUser } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "./SkeletonLoader";
function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <SkeletonLoader times={5} className="h-10 w-full"></SkeletonLoader>;
  }
  if (error) {
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
  return (
    <>
      <div>{renderedUsers}</div>
    </>
  );
}
export default UsersList;
