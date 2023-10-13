import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

export default function AlbumsListItem({ album }) {
  const header = (
    <>
      <Button
        className=" mr-3 cursor-pointer"
        isLoading={false}
        onClick={() => {}}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return <ExpandablePanel header={header}></ExpandablePanel>;
}
