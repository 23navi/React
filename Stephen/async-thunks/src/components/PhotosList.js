import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotosListItem from "./PhotosListItem";
import SkeletonLoader from "./SkeletonLoader";
import Button from "./Button";

export function PhotosList({ childern, album }) {
  const { data, isLoading, isFetching, error, isError } =
    useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const photosList = data?.map((photo) => {
    return <PhotosListItem key={photo.key} photo={photo}></PhotosListItem>;
  });

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;

  if (isLoading || isFetching) {
    content = <SkeletonLoader times={5} className="w-50 h-10"></SkeletonLoader>;
  } else if (isError) {
    content = <p>Error</p>;
  } else {
    content = <div>{photosList}</div>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <div>Photos for {album.title}</div>
        <Button isLoading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Album
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
}
