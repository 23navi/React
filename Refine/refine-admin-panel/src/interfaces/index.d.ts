export interface ICategory {
  id: number;
  title: string;
}

export interface IPost {
  id: number;
  title: string;
  category: { id: number };
  createdAt: string;
  status: "publish" | "draft" | "rejected";
}
