import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
const Navbar = ({ props }) => {
  const [showMenu, setShowMenu] = useState(false);

  let mobileMenuText = 'Meny';
  let displayMobilemenu;
  let ariaExpandedValue = false;

  if (showMenu) {
    displayMobilemenu = <MenuMobile props={props} />;
    ariaExpandedValue = 'true';
    mobileMenuText = '';
  }

  return (
    <nav role="navigation" className={styles.nav}>
      <Link href={`/`} as={`/`}>
        <a>
          <img src="../../images/logo.svg" alt="Gundla logo" className={styles.logo} />
        </a>
      </Link>
      <MenuDesktop props={props} />
      <button
        className={styles.mobileMenuButton}
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        aria-haspopup="true"
        aria-expanded={`${ariaExpandedValue}`}
      >
        {mobileMenuText}
      </button>
      {displayMobilemenu}
    </nav>
  );
};

export default Navbar;
