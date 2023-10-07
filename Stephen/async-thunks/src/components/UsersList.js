import { fetchUsers } from "../store";
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
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
export default UsersList;
