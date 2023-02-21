import { CupcakeType } from "@/types";
import Fuse from "fuse.js";

export const runSearch = (list: CupcakeType[], searchParam: string) => {
  const options = {
    includeScore: true,
    // Search in `name` and in `description` per cupcake
    keys: ["name", "description"],
  };

  if (!list) return [];
  const fuse = new Fuse(list || [], options);
  const results = fuse.search(searchParam).map(res => res.item);
  return results;
};
