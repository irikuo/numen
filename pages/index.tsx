import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getPosts, BlogPost } from '../utils/posts';

type IndexProps = {
  posts: BlogPost[];
};

const Home: NextPage<IndexProps> = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Next Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Welcome to Next Blog</h1>

      <h2>Posts</h2>

      <nav>
        <ul className="postList">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>

    <footer></footer>
  </div>
);

export const getStaticProps = (): { props: IndexProps } => {
  const sortedPosts = getPosts().sort((a, b) => a.date.localeCompare(b.date));
  return { props: { posts: sortedPosts } };
};

export default Home;
