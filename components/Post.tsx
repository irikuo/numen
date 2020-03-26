import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import format from 'date-fns/format';

import styles from './Post.module.scss';

export type PostProps = {
  slug: string;
  title: string;
  date: string;
  html: string;
};

const Post: NextPage<PostProps> = ({ slug, title, date, html }) => {
  return (
    <main className={styles.page} aria-label="Content">
      <Head>
        <title>{title}</title>
      </Head>
      <article className={styles.post}>
        <header className={styles.header}>
          <h1>
            <Link href={slug}>{title}</Link>
          </h1>
        </header>

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }}></div>

        <footer className="footer">
          <p>
            <Link href={slug}>{title}</Link> was published{' '}
            <time dateTime={date}>{format(new Date(date), 'd MMM yyyy')}</time>
          </p>
          <Link href="/">
            <a>&laquo; Back</a>
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default Post;