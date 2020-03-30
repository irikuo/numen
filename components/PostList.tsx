import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import hl from 'highlight.js';
import marked from 'marked';
import { BlogPost } from '../utils/posts';

import styles from './PostList.module.scss';

type PostListItemProps = {
  post: BlogPost;
};

const PostListItem: React.FunctionComponent<PostListItemProps> = ({ post }) => (
  <article className={styles.post}>
    <p className={styles.date}>
      <time dateTime={post.date}>{format(new Date(post.date), 'd MMM yyyy')}</time>
    </p>
    <h2 className={styles.title}>
      <Link href={`/post/${post.slug}`}>
        <a className={styles.title}>{post.title}</a>
      </Link>
    </h2>
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{
        __html: marked(post.summary, {
          highlight: (code, lang) => {
            return hl.highlight(lang, code).value;
          },
        }),
      }}
    ></div>
    <Link href={`/post/${post.slug}`}>
      <a className={styles.more}>Continue reading...</a>
    </Link>
  </article>
);

type PostListProps = {
  posts: BlogPost[];
};

const PostList: React.FunctionComponent<PostListProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostListItem post={post} key={post.slug} />
    ))}
  </>
);

export default PostList;
