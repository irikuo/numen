import React from 'react';
import Meta from './Meta';
import Header from './Header';

import styles from './Layout.module.scss';

type Props = {
  title: string;
  description: string;
};

const Layout: React.FunctionComponent<Props> = ({ title, description, children }) => {
  return (
    <section className={styles.layout}>
      <Meta title={title} description={description} />
      <main className={styles.content}>
        <Header />
        {children}
        <footer className={styles.footer}></footer>
      </main>
    </section>
  );
};

export default Layout;
