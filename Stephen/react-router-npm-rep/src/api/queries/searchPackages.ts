import type { PackageSummary } from "../types/packageSummary";

interface SearchPackagesResponse {
  objects: {
    package: PackageSummary;
  }[];
}

const searchPackages = async (term: string): Promise<PackageSummary[]> => {
  const res = await fetch(
    `https://registry.npmjs.com/-/v1/search?text=${term}&size=20`
  );
  const data: SearchPackagesResponse = await res.json();
  const packageSummary = data.objects.map(
    ({ package: { name, description, keywords, version } }) => {
      return {
        name,
        version,
        description,
        keywords,
      };
    }
  );
  return packageSummary;
};

export default searchPackages;
