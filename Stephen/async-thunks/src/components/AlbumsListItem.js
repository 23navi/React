import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumMutation } from "../store";

export default function AlbumsListItem({ album }) {
  const [deleteAlbum, results] = useDeleteAlbumMutation();
  const handleDelete = () => {
    console.log({ album });
    deleteAlbum(album);
  };
  const header = (
    <>
      <Button
        className=" mr-3 cursor-pointer"
        isLoading={results.isLoading}
        onClick={handleDelete}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return <ExpandablePanel header={header}></ExpandablePanel>;
}
