import { useNavigate } from "react-router-dom";

// CONFIG
import { routerConfig } from "@router";

// COMPONENTS
import { Button } from "@components/integrated";
import { Heading, Text } from "@typography";
import { Image } from "@/components/atomic";

const HeroTemplate = () => {
  const navigate = useNavigate();
  const title = "Exquisite taste for true connoisseurs";
  const p = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque minima, quisquam deserunt exercitationem voluptas, odit ut asperiores autem velit quasi animi eum, in magni ex consequuntur aperiam quas illum.",
  ];

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col justify-center items-center`}
    >
      <Image
        src="/Subject (3).png"        
        alt="syrup on cupcake"
        className={`w-32 2xl:w-40 absolute -right-8 2xl:-right-4 -top-16 -rotate-2`}
      />

      <Image
        src="/Subject (11).png"
        alt="chocolate cupcakes"
        className={`w-40 2xl:w-56 absolute right-40 2xl:right-64 top-24 2xl:top-44`}
      />

      <Image
        src="/Subject (5).png"
        alt="floral cupcakes"
        className={`w-60 2xl:w-80 absolute -left-10 top-0 rotate-180`}
      />

      <Image
        src="/Subject (6).png"
        alt="floral cupcakes on dish"
        className={`w-72 2xl:w-96 absolute left-20 -bottom-4`}
      />

      <Image
        src="/Subject (2).png"
        alt="cupcakes on picnic blanket"
        className={`w-96 2xl:w-[28rem] absolute -right-10 -bottom-40`}
      />

      <div
        className={`w-full flex flex-col justify-center items-center mb-10 -mt-12`}
      >
        <Heading title={title} variant="h1" className="max-w-2xl text-center" />
        <Text
          variant="paragraph"
          copy={p}
          className="max-w-lg text-center mt-6"
        />
      </div>

      <Button
        variant="primary"
        label="shop cupcakes"
        onClick={() => navigate(routerConfig.CollectionsPage.path)}
      />
    </div>
  );
};

export default HeroTemplate;
