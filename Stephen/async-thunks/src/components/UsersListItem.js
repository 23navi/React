import { GoTrash } from "react-icons/go";
import useAsyncThunk from "../hooks/useAsyncThunk";
import { deleteUser } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export default function UsersListItem({ user }) {
  const [doDeletUser, isDeletingUser, errorDeletingUser] =
    useAsyncThunk(deleteUser);

  const header = (
    <>
      <Button
        className=" mr-3 cursor-pointer"
        isLoading={isDeletingUser}
        onClick={() => doDeletUser(user)}
      >
        <GoTrash />
      </Button>
      {errorDeletingUser && <div>Error deleting user</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
