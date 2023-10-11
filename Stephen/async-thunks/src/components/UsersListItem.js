import { GoTrash } from "react-icons/go";
import useAsyncThunk from "../hooks/useAsyncThunk";
import { deleteUser } from "../store";
import Button from "./Button";

export default function UsersListItem({ user }) {
  const [doDeletUser, isDeletingUser, errorDeletingUser] =
    useAsyncThunk(deleteUser);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button
          className="cursor-pointer"
          isLoading={isDeletingUser}
          onClick={() => doDeletUser(user)}
        >
          <GoTrash />
        </Button>
        {user.name}
      </div>
    </div>
  );
}
