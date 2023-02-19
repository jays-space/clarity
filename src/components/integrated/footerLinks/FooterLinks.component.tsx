import { Link } from "react-router-dom";

// ROUTER
import { getFooterLinks } from "@/router/utils.router";

// COMPONENTS

const FooterLinks = () => {
  return (
    <div className="flex flex-1 flex-row justify-between items-center">
      <div className="flex flex-row">
        {getFooterLinks().map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-row mx-10 first-of-type:ml-0 last-of-type:mr-0 text-white text-opacity-70 hover:text-opacity-100 border-transparent hover:border-white border-b-2 transition duration-300`}
          >
            <a href={path}>{label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
