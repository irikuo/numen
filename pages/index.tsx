import React from 'react';
import { NextPage } from 'next';
import { getPosts, BlogPost } from '../utils/posts';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

type IndexProps = {
  posts: BlogPost[];
};

const Home: NextPage<IndexProps> = ({ posts }) => (
  <Layout title="numen" description="">
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps = (): { props: IndexProps } => {
  const sortedPosts = getPosts().sort((a, b) => a.date.localeCompare(b.date));
  return { props: { posts: sortedPosts } };
};

export default Home;
