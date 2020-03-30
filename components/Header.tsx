import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a className={styles.title}>Next Blog</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
