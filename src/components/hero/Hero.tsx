import { useRef, useEffect } from 'react';

import Link from 'next/link';

function Hero(props) {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <section>
      <div id="videoplayer">
        <video
          style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}
          playsInline
          muted
          controls
          alt="All the devices"
          src="https://cdn.cosmicjs.com/e35185a0-fe67-11ec-8d8a-d15cc33d0ea9-Race-Highlights--2022-British-Grand-Prix.mp4"
          ref={videoEl}
        />
      </div>

      <div className=" p-5 text-2xl text-white bg-red-900 bg-opacity-100 m-10 mt-5 rounded-xl">
        <h3 className=" text-3xl lg:text-4xl leading-tight text-red text-center ">
          <Link as={`/posts/${props.slug}`} href="/posts/[{props.slug}]">
            <a className="hover:underline">{props.title}</a>
          </Link>
        </h3>
      </div>
    </section>
  );
}

export { Hero };
