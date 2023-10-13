import { useFetchAlbumsQuery } from "../store";
export default function AlbumsList({ user }) {
  const result = useFetchAlbumsQuery(user);
  const { data, isLoading, isFetching, error } = result;
  console.log({ result });
  return <div>Albums for {user.name}</div>;
}
