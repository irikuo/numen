import React from 'react';
import { NextPage, GetStaticPaths } from 'next';
import { getPosts } from '../../utils/posts';
import Post, { PostProps } from '../../components/Post';

const PostPage: NextPage<PostProps> = (props) => {
  return <Post {...props} />;
};

export const getStaticProps = ({ params }: { params: { slug: string } }): { props: PostProps } => {
  const { slug } = params;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = getPosts().find((p) => p.slug === slug)!;

  return {
    props: {
      ...post,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPosts().map((post) => `/post/${post.slug}`),
    fallback: false,
  };
};

export default PostPage;
