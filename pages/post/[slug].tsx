import React from 'react';
import { NextPage, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import format from 'date-fns/format';
import hl from 'highlight.js';
import marked from 'marked';
import { getPosts } from '../../utils/posts';

type PostProps = {
  slug: string;
  title: string;
  date: string;
  html: string;
};

const Post: NextPage<PostProps> = ({ slug, title, date, html }) => {
  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <article className="post h-entry">
          <header className="post-header">
            <Head>
              <title>{title}</title>
            </Head>
            <Link href="/">
              <a>&laquo; Back</a>
            </Link>
            <h1 className="post-title p-name" itemProp="name headline">
              {title}
            </h1>
            <p className="post-meta">
              <time className="dt-published" dateTime={date} itemProp="datePublished">
                {format(new Date(date), 'd MMM yyyy')}
              </time>
            </p>
          </header>

          <div
            className="post-content e-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>

          <a className="u-url" href={`/posts/${slug}`} hidden></a>

          <footer className="site-footer">
            <Link href="/">
              <a>&laquo; Back</a>
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
};

export const getStaticProps = ({ params }: { params: { slug: string } }): { props: PostProps } => {
  const { slug } = params;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = getPosts().find(p => p.slug === slug)!;

  const { title, date, content } = post;

  return {
    props: {
      slug,
      title,
      date,
      html: marked(content, {
        highlight: (code, lang) => {
          return hl.highlight(lang, code).value;
        },
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPosts().map(post => `/post/${post.slug}`),
    fallback: false,
  };
};

export default Post;
