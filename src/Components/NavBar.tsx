import { useEffect, useState, useRef } from "react";

const NavBar = () => {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const menuBurgerRef = useRef<HTMLButtonElement>(null);

  const handleClickBurger = () => {
    setViewNavBar(!viewNavBar);
    if (!viewNavBar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const handleClickLink = () => {
    setViewNavBar(!viewNavBar);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navBarRef.current &&
        !navBarRef.current.contains(event.target as Node) &&
        menuBurgerRef.current &&
        !menuBurgerRef.current.contains(event.target as Node)
      ) {
        document.body.classList.remove("no-scroll");
        setViewNavBar(false);
      }
    };

    if (viewNavBar) {
      document.body.addEventListener("click", handleOutsideClick);
    } else {
      document.body.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [viewNavBar]);
  return (
    <>
      <nav
        ref={navBarRef}
        className={`navBar ${viewNavBar ? "showLinks" : "hideLinks"} `}
      >
        <ul className="navLinks">
          <li>
            <a href="#aboutPart" onClick={handleClickLink}>
              A propos de moi
            </a>
          </li>
          <li>
            <a href="#skillPart" onClick={handleClickLink}>
              Mes compétences
            </a>
          </li>
          <li>
            <a href="#projectsPart" onClick={handleClickLink}>
              Mes Projets
            </a>
          </li>
          <li>
            <a href="#monitoringPart" onClick={handleClickLink}>
              Ma veille technologique
            </a>
          </li>
          <li>
            <a href="#contactPart" onClick={handleClickLink}>
              Me contacter
            </a>
          </li>
        </ul>
      </nav>
      <button
        ref={menuBurgerRef}
        className="menuBurger"
        onClick={handleClickBurger}
      >
        <span className="burger-bar"></span>
      </button>
    </>
  );
};

export default NavBar;
