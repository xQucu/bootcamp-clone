import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from './Button';
import Logo from './Logo';

const NavBar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuToggled(false);
    }
  }, [isMobile]);

  const toggleNavBar = () => {
    setIsMenuToggled((prevState) => !prevState);
  };
  return (
    <nav className="fixed backdrop-blur-3xl bg-opacity-50 xl:px-[6.25rem] top-0 left-0 right-0 pb-1 bg-white flex pt-4 flex-col lg:flex-row max-w-screen justify-between items-center px-2">
      <div className="flex justify-between items-center w-full">
        <div className="ps-2">
          <Logo color="black" className="w-[13.7rem]" />
        </div>
        <div className="lg:hidden">
          {isMenuToggled ? (
            <XIcon onClick={toggleNavBar} />
          ) : (
            <MenuIcon onClick={toggleNavBar} />
          )}
        </div>
      </div>

      <div
        className={`flex lg:flex gap-[2.5rem] lg:pt-0 pt-3 items-center flex-col lg:flex-row w-screen lg:opacity-100 min-w-max justify-end ${
          isMenuToggled ? '' : 'hidden'
        }`}>
        <button>About us</button>
        <button>Services</button>
        <button>Use Cases</button>
        <button>Pricing</button>
        <button>Blog</button>
        <Button variant="outline">Request a quote</Button>
      </div>
    </nav>
  );
};

export default NavBar;
