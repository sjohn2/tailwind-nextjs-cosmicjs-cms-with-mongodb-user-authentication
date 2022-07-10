import { News } from '../components/news/News';

export const Latest = () => (
  <section>
    <h2 className="mb-8 text-6xl md:text-7xl font-bold text-color-black tracking-tighter leading-tight">
      Latest
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
      <News />
    </div>
  </section>
);
