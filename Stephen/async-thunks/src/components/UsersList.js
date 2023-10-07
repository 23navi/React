import { fetchUsers } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}
export default UsersList;
