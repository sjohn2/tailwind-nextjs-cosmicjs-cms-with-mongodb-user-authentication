import Link from 'next/link';

import CoverImage from './cover-image';

export default function MoreStories({ posts }) {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols- xl:grid-cols-4 gap-5">
      {posts.map((news) => (
        <div className="rounded overflow-hidden shadow-lg" key={news.slug}>
          <CoverImage
            slug={news.slug}
            title={news.title}
            url={news.metadata.cover_image.url}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <Link as={`/posts/${news.slug}`} href="/posts/[slug]">
                <a className="hover:underline">{news.title}</a>
              </Link>
            </div>
            <p className="text-gray-700 text-base">{news.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
