import { GoTrash } from "react-icons/go";
import useAsyncThunk from "../hooks/useAsyncThunk";
import { deleteUser } from "../store";
import Button from "./Button";

export default function UsersListItem({ user }) {
  const [doDeletUser, isDeletingUser, errorDeletingUser] =
    useAsyncThunk(deleteUser);

  return (
    <div className="mb-2 border rounded">
      <Button
        className="cursor-pointer"
        isLoading
        onClick={() => doDeletUser(user)}
      >
        <GoTrash />
      </Button>

      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
}
