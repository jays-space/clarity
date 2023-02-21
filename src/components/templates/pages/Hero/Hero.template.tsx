import { useNavigate } from "react-router-dom";

// CONFIG
import { routerConfig } from "@/router";

// COMPONENTS
import { Button } from "@/components/integrated";
import { Heading, Text } from "@typography";

const HeroTemplate = () => {
  const navigate = useNavigate();
  const title = "exquisite taste for true connoisseurs";
  const p = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque minima, quisquam deserunt exercitationem voluptas, odit ut asperiores autem velit quasi animi eum, in magni ex consequuntur aperiam quas illum.",
  ];

  return (
    <>
      <Heading title={title} variant="h1" className="max-w-xl text-center" />
      <Text
        variant="paragraph"
        copy={p}
        className="max-w-lg text-center mt-2 mb-10"
      />

      <Button
        variant="primary"
        label="shop cupcakes"
        onClick={() => navigate(routerConfig.CollectionsPage.path)}
      />
    </>
  );
};

export default HeroTemplate;
