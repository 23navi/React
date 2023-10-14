import {
  useAddPhotoMutation,
  useDeletePhotoMutation,
  useFetchPhotosQuery,
} from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

export default function PhotosListItem({ photo }) {
  const [deletePhoto, deletePhotoResults] = useDeletePhotoMutation();
  const handleDelete = () => {
    deletePhoto(photo);
  };
  const header = (
    <>
      <Button
        className=" mr-3 cursor-pointer"
        isLoading={deletePhotoResults.isLoading}
        onClick={handleDelete}
      >
        <GoTrash />
      </Button>
      <div>
        <img src={photo.url} alt=""></img>
      </div>
    </>
  );
  return <>{header}</>;
}
