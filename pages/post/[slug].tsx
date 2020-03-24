import React from 'react';
import { NextPage, GetStaticPaths } from 'next';
import hl from 'highlight.js';
import marked from 'marked';
import { getPosts } from '../../utils/posts';
import Post, { PostProps } from '../../components/Post';

const PostPage: NextPage<PostProps> = (props) => {
  return <Post {...props} />;
};

export const getStaticProps = ({ params }: { params: { slug: string } }): { props: PostProps } => {
  const { slug } = params;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = getPosts().find((p) => p.slug === slug)!;

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
    paths: getPosts().map((post) => `/post/${post.slug}`),
    fallback: false,
  };
};

export default PostPage;
