import { Outlet, useNavigate } from "react-router";

// COMPONENTS
import { Button, StoreOptionPicker } from "@/components/integrated";
import { Heading } from "@typography";

// UTILS
import { getRootStoreManagementMenuPaths } from "../StoreManagement.utils";

interface IStoreManagementPageTemplate {
  isStoreRootPath: boolean;
}

const StoreManagementPageTemplate = ({
  isStoreRootPath,
}: IStoreManagementPageTemplate) => {
  const navigate = useNavigate();

  return (
    <>
      {!isStoreRootPath ? (
        <div
          className={`w-full flex flex-row justify-end items-center mt-4 mb-16`}
        >
          {getRootStoreManagementMenuPaths().map(({ label, path }) => {
            return (
              <Button
                key={label}
                label={label}
                onClick={() => navigate(path)}
              />
            );
          })}
        </div>
      ) : null}

      {isStoreRootPath ? (
        <>
          <Heading title="Store Management" variant="h2" className={`mt-12`} />
          <div className={`flex flex-row flex-wrap mb-10 mt-16`}>
            {getRootStoreManagementMenuPaths().map(({ label, path }) => {
              return (
                <StoreOptionPicker key={label} label={label} path={path} />
              );
            })}
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default StoreManagementPageTemplate;
