import { ReactNode } from "react";

// TYPES
import { PageAlignmentType } from "./Page.types";

// UTILS
import { getAlignment } from "./Page.utils";

interface IPage {
  children: ReactNode;
  align?: PageAlignmentType;
  fullWidth?: boolean;
}

const Page = ({ children, align = "center", fullWidth = false }: IPage) => {
  return (
    <div className={`${fullWidth ? "w-full" : "w-full 2xl:w-10/12"} flex flex-col ${getAlignment(align)}`}>
      {children}
    </div>
  );
};

export default Page;
