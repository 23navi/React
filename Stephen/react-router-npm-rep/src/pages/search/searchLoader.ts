import searchPackages from "../../api/queries/searchPackages";

export const searchLoader = async ({ request }: { request: Request }) => {
  const { searchParams } = new URL(request.url);

  const term = searchParams.get("term");

  if (!term) throw new Error("Term is required");

  const data = searchPackages(term);
  return data;
};
