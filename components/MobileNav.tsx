import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavButton from "./NavButton";
import { navLinks } from "./Header";

type mobileNavProps = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav(props: mobileNavProps) {
  const { navOpen, setNavOpen } = props;
  return (
    <>
      <div
        id="mobile-nav"
        className={`z-[11] fixed h-screen w-screen transition-transform duration-300 ease-in-out desktop-only:hidden ${
          navOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 bottom-0 right-0 flex flex-col gap-4 p-4 font-bold bg-white shadow-lg left-1/2 font-title">
          <div className="flex justify-end">
            <button
              className="px-4 py-2 w-min"
              onClick={() => setNavOpen(false)}
            >
              <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 child:w-min">
            {navLinks.map(({ text, href }, index) => {
              return (
                <NavButton
                  key={index}
                  onClick={() => setNavOpen(false)}
                  text={text}
                  href={href}
                ></NavButton>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none transition-all duration-300 fixed ease-in-out z-[10] h-screen w-screen ${
          navOpen ? "backdrop-blur" : "backdrop-blur-none"
        }`}
      ></div>
    </>
  );
}
