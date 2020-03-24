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
      <article className={styles.post}>
        <header className={styles.header}>
          <Head>
            <title>{title}</title>
          </Head>
          <Link href="/">
            <a>&laquo; Back</a>
          </Link>
          <h1 className="title">{title}</h1>
          <p className="post-meta">
            <time className="dt-published" dateTime={date}>
              {format(new Date(date), 'd MMM yyyy')}
            </time>
          </p>
        </header>

        <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div>

        <a className="u-url" href={`/posts/${slug}`} hidden></a>

        <footer className="footer">
          <Link href="/">
            <a>&laquo; Back</a>
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default Post;
