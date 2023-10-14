import { useFetchAlbumsQuery } from "../store";
import SkeletonLoader from "./SkeletonLoader";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";

export default function AlbumsList({ user }) {
  const result = useFetchAlbumsQuery(user);
  const { data, isLoading, isFetching, error, isError } = result; // isError is defined on no error also but error is only defined when we actuall have error
  let content;
  if (isFetching) {
    content = (
      <SkeletonLoader times={5} className={"h-10 w-100"}></SkeletonLoader>
    );
  } else if (isError) {
    content = <div>Error occured</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem album={album} key={album.id}></AlbumsListItem>;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <div>Albums for {user.name}</div>
        <Button>+ Add Users</Button>
      </div>

      <div>{content}</div>
    </div>
  );
}
