import { Banner } from '../components/Banner';
import { Hero } from '../components/hero/Hero';
import MoreStories from '../components/posts/More-stories';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

import {Featured} from '../components/Featured';
import { getCookie } from 'cookies-next';
import { Fragment, useEffect, useState } from 'react';

export function Home(props) {
  const topPost = props.allPosts[0];
  const newsPosts = props.allPosts.slice(1);
  const newsShortlisted = newsPosts.slice(1, 5);

  // const [authToken, setAuthToken] = useState("");

  // const cookies = getCookie("authToken_abc");
  // let cookiesValue = cookies;
  // let cookieFlag = true;
  // console.log(cookiesValue);
  // if (cookiesValue) {
  //   if (cookiesValue === "00") {
  //     console.log(cookiesValue);
  //     cookieFlag = false;
  //   }
  // } else {
  //   cookieFlag = false;
  // }
  
  // useEffect(() => {
  //   setAuthToken(cookieFlag);
  // }, []);

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

      <Featured/>

      <Footer />
    </div>
  );
}
