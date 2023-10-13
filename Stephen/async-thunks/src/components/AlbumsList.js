import { useFetchAlbumsQuery } from "../store";
import SkeletonLoader from "./SkeletonLoader";
import AlbumsListItem from "./AlbumsListItem";

export default function AlbumsList({ user }) {
  const result = useFetchAlbumsQuery(user);
  const { data, isLoading, isFetching, error } = result;
  let content;
  if (isFetching) {
    content = (
      <SkeletonLoader times={5} className={"h-10 w-100"}></SkeletonLoader>
    );
  } else {
    content = data.map((album) => {
      return <AlbumsListItem album={album} key={album.id}></AlbumsListItem>;
    });
  }

  return (
    <div>
      <div>Albums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
}
