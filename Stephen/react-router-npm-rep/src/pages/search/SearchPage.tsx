import { useLoaderData } from "react-router-dom";
export default function SearchPage() {
  try {
    const data = useLoaderData();
    console.log(data);
  } catch (err) {
    console.log({ err });
  }
  return <div>Search Page</div>;
}
