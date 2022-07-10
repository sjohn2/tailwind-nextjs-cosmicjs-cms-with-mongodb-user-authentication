import { useRouter } from 'next/router';
import ErrorPage from 'next/error'
import MoreStories from '../../components/posts/more-stories';
import PostBody from '../../components/posts/post-body';
import PostHeader from '../../components/posts/post-header';
import { Meta } from '../../layout/Meta';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/posts/post-title'
import { markdownToHtml } from '../../lib/markdownToHtml';
import { Footer } from '../../templates/Footer';
import { Header } from '../../templates/Header';
import { AppConfig } from '../../utils/AppConfig';

import _ from 'lodash'

import { ParsedUrlQueryInput } from 'querystring'



const Post = ({
  post,
  morePosts,
  preview
}) => {
  

  

  const router = useRouter()
  const { slug } = router.query
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="antialiased text-gray-600">
      <Meta title="post title" description={AppConfig.description} />
      <Header />
      {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
<article className="container w-full md:max-w-34l mx-auto p-20">
        <PostHeader
           title={post.title}
           coverImage={post.metadata.cover_image}
           date={post.created_at}
           author={post.metadata.author}
        />
       <PostBody content={post.metadata['content']} />
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left md:text-left mt-10">
          More Stories
        </h2>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </article>


          )}
      
      <Footer />
    </div>
  );
}

type staticProps = {
  params: ParsedUrlQueryInput;
  preview: boolean;
}

export const getStaticProps = async (props: staticProps) => {
  let {
    params,
    preview = null
  } = props;
  const data = await getPostAndMorePosts(params.slug as string, preview)
  const content = await markdownToHtml(data['post']?.metadata?.content || '')
  return {
    props: {
      preview,
      post: {
        ...data['post'],
        content,
      },
      morePosts: data['morePosts'] || [],
    },
  }
}

export const getStaticPaths = async () => {
  const allPosts = (await getAllPostsWithSlug()) || []
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}

export default Post;