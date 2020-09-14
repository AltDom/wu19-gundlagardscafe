import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Desktopmenu from "./Desktopmenu";
import MobileMenu from "./MobileMenu";
const Navbar = ({ props }) => {
  const [showMenu, setShowMenu] = useState(false);

  let displayMobilemenu;
  let mobileMenuText = "Meny";
  let ariaExpandedValue = false;

  if (showMenu) {
    displayMobilemenu = <MobileMenu props={props} />;
    ariaExpandedValue = "true";
    mobileMenuText = "x";
  }

  return (
    <nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={styles.MobileMenuButton}
        type="button"
        aria-haspopup="true"
        aria-expanded={`${ariaExpandedValue}`}
      >
        {mobileMenuText}
      </button>
      {displayMobilemenu}
      <Desktopmenu props={props} />
    </nav>
  );
};

export default Navbar;
