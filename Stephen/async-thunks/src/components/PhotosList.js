import {
  useAddPhotoMutation,
  useDeletePhotoMutation,
  useFetchPhotosQuery,
} from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import SkeletonLoader from "./SkeletonLoader";

export function PhotosList({ childern, album }) {
  const { data, isLoading, isFetching, error, isError } =
    useFetchPhotosQuery(album);
  const [deletePhoto, results] = useDeletePhotoMutation();
  const [addPhoto, results2] = useAddPhotoMutation();

  const handleDelete = () => {
    deletePhoto(album);
  };

  const photosList = data?.map((photo) => {
    return (
      <div key={photo.id}>
        <Button
          className=" mr-3 cursor-pointer"
          isLoading={results.isLoading}
          onClick={handleDelete}
        >
          <GoTrash />
        </Button>
        <div>
          <img src={photo.url} alt=""></img>
        </div>
      </div>
    );
  });

  if (isLoading || isFetching) {
    return <SkeletonLoader times={5} className="w-50 h-10"></SkeletonLoader>;
  } else if (isError) {
    return <p>Error</p>;
  } else {
    return <div>{photosList}</div>;
  }
}
