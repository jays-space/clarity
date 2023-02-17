import { ReactNode } from "react";

// TYPES
import { PageAlignmentType } from "./Page.types";

// UTILS
import { getAlignment } from "./Page.utils";

interface IPage {
  children: ReactNode;
  align?: PageAlignmentType;
}

const Page = ({ children, align = "center" }: IPage) => {
  return (
    <div className={`flex flex-col items-e ${getAlignment(align)}`}>
      {children}
    </div>
  );
};

export default Page;
