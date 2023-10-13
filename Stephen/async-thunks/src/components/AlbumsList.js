import { useFetchAlbumsQuery } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import SkeletonLoader from "./SkeletonLoader";

export default function AlbumsList({ user }) {
  const result = useFetchAlbumsQuery(user);
  const { data, isLoading, isFetching, error } = result;
  let content;
  if (isFetching) {
    content = (
      <SkeletonLoader times={5} className={"h-10 w-100"}></SkeletonLoader>
    );
  } else {
    console.log(data);
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return <ExpandablePanel key={album.id} header={header}></ExpandablePanel>;
    });
  }

  return (
    <div>
      <div>Albums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
}
