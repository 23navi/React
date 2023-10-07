import { fetchUsers } from "../store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>User Lists</h1>
    </div>
  );
}
export default UsersList;
