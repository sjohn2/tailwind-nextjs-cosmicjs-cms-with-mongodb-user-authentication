import { GetStaticProps } from 'next';

import { getAllPostsForHome } from '../lib/api';
import { Home } from '../templates/Home';

export default function Index({ allPosts }) {
  return <>{allPosts && <Home allPosts={allPosts} />}</>;
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
};
