import { Banner } from '../components/Banner';
import { Hero } from '../components/hero/Hero';
import MoreStories from '../components/posts/more-stories';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

export function Home(props) {
  const topPost = props.allPosts[0];
  const newsPosts = props.allPosts.slice(1);
  const newsShortlisted = newsPosts.slice(1, 5);

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />

      <Hero
        title={topPost.title}
        coverImage={topPost.metadata.cover_image.url}
        date={topPost.created_at}
        author={topPost.metadata.author.title}
        slug={topPost.slug}
        excerpt={topPost.metadata.excerpt}
        authorImg={topPost.metadata.author.thumbnail}
      />
      <MoreStories posts={newsShortlisted} />

      <Banner />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <h3 className="font-bold text-xl text-red-700">Featured Team</h3>
          <img
            src="assets/images/alfaromeo.png"
            title="Alfarome is the featured team"
            alt="Alpharomeo track image"
          />

          <div className="px-6 py-4 max-h-200">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base">
              BAHRAIN, BAHRAIN - MARCH 11: Valtteri Bottas of Finland driving
              the (77) Alfa Romeo F1 C42 Ferrari on track during Day Two of F1
              Testing at Bahrain International Circuit on March 11, 2022 in
              Bahrain, Bahrain.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <h3 className="font-bold text-xl text-red-700">Driver Spotlight</h3>
          <img
            src="assets/images/driver-spotlight.png"
            title="Valtteri and Zhou"
            alt="Valtteri and Zhou - driver spotlight winner"
          />

          <div className="px-6 py-4 max-h-200">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base">
              Making his F1 debut with Williams in 2013, Bottas soon became part
              of the family. Points and podiums followed with the reliable racer
              even amassing the most points without a win, a record he resented
              but that showcased his ability.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
