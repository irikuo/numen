import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import format from 'date-fns/format';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import Layout from './Layout';

import styles from './Post.module.scss';

export type PostProps = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

const Post: NextPage<PostProps> = ({ slug, title, date, content }) => {
  return (
    <Layout title={title} description={title}>
      <article className={styles.post}>
        <Link href={slug}>
          <a className={styles.title}>
            <h1 className={styles.title}>{title}</h1>
          </a>
        </Link>
        <ReactMarkdown className={styles.content} source={content} renderers={{ code: CodeBlock }} />

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
