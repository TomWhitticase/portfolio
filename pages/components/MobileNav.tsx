import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavButton from "./NavButton";

type mobileNavProps = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav(props: mobileNavProps) {
  const { navOpen, setNavOpen } = props;
  return (
    <div
      id="mobile-nav"
      className={`backdrop-blur z-[10] fixed h-screen w-screen desktop-only:hidden ${
        navOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed right-0 left-1/2 top-0 bottom-0 bg-main dark:bg-gray-dark dark:text-white font-bold font-title shadow-lg flex flex-col gap-4 p-4">
        <div className="flex justify-end">
          <button className="w-min px-4" onClick={() => setNavOpen(false)}>
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center child:w-min">
          {[
            { text: "Home", href: "#home" },
            { text: "About", href: "#about" },
            { text: "Skills", href: "#skills" },
            { text: "Projects", href: "#projects" },
            { text: "Contact", href: "#contact" },
          ].map(({ text, href }, index) => {
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
  );
}
