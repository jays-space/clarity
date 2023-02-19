import { Logo } from "@/components/atomic";
import { FooterLinks } from "@/components/integrated";

const Footer = () => {
  return (
    <footer className="my-16 flex flex-grow-0 flex-col justify-between items-center bg-primary-700 py-20 rounded-3xl">
      <Logo setWidth={false} variant="light" />

      <div className="mt-24 flex flex-1 flex-row justify-between items-center">
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
