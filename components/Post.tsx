import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import format from 'date-fns/format';
import Layout from './Layout';

import styles from './Post.module.scss';

export type PostProps = {
  slug: string;
  title: string;
  date: string;
  html: string;
};

const Post: NextPage<PostProps> = ({ slug, title, date, html }) => {
  return (
    <Layout title={title} description={title}>
      <article className={styles.post}>
        <Link href={slug}>
          <a className={styles.title}>
            <h1 className={styles.title}>{title}</h1>
          </a>
        </Link>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }}></div>

        <footer className={styles.footerText}>
          <Link href={slug}>
            <a className={styles.footerText}>{title}</a>
          </Link>{' '}
          was originally published on{' '}
          <time className={styles.footerText} dateTime={date}>
            {format(new Date(date), 'd MMM yyyy')}
          </time>
        </footer>
      </article>
    </Layout>
  );
};

export default Post;
