import { CupcakeType } from "@/types";

export type SearchState = {
  data: CupcakeType[];
  results: CupcakeType[];
  isVisible: boolean;
};
