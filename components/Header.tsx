import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ButtonAnimated from "./buttons/ButtonAnimated";

const Header = () => {
  return (
    <div className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            SM<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
          <ButtonAnimated href="/contact">
            Hire me
          </ButtonAnimated>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
