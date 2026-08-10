


import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { InView } from '@/components/core/in-view';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { Spotlight } from '@/components/core/spotlight';
import { ArrowUpRight, Filter } from 'lucide-react';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  colors: string[];
  img: string;
  badge?: 'NEW' | 'LOW STOCK' | 'LIMITED';
  bestSeller?: boolean;
};

const products: Product[] = [
  { id: 'p01', name: 'Heavyweight Crew', category: 'Heavy Weight', price: 148, oldPrice: 168, colors: ['#1a1a1a', '#F5F2EA', '#ee3a14', '#307040'], img: HOODIE_IMAGES.blackStudio, badge: 'NEW', bestSeller: true },
  { id: 'p02', name: 'Brushed Off-White', category: 'Heavy Weight', price: 138, colors: ['#F5F2EA', '#1a1a1a', '#c8e7da'], img: HOODIE_IMAGES.cream, bestSeller: true },
  { id: 'p03', name: 'Burnt Orange Capsule', category: 'Oversized', price: 152, colors: ['#e59a31', '#1a1a1a'], img: HOODIE_IMAGES.orange, badge: 'LOW STOCK' },
  { id: 'p04', name: 'Cardinal Red Pullover', category: 'Essentials', price: 148, colors: ['#c43020', '#1a1a1a', '#F5F2EA'], img: HOODIE_IMAGES.red, badge: 'NEW' },
  { id: 'p05', name: 'Onyx Side Profile', category: 'Essentials', price: 142, colors: ['#1a1a1a', '#c8e7da', '#c8b5ef'], img: HOODIE_IMAGES.black, bestSeller: true },
  { id: 'p06', name: 'Studio Red Square', category: 'Limited', price: 168, colors: ['#c43020', '#1a1a1a'], img: HOODIE_IMAGES.redSquare, badge: 'LIMITED' },
  { id: 'p07', name: 'Green Light Editorial', category: 'Tech Fleece', price: 178, oldPrice: 198, colors: ['#1a1a1a', '#307040'], img: HOODIE_IMAGES.green },
  { id: 'p08', name: 'Cropped Bone', category: 'Cropped', price: 128, colors: ['#F5F2EA', '#1a1a1a'], img: HOODIE_IMAGES.whiteHoodie },
  { id: 'p09', name: 'Soda Run', category: 'Cropped', price: 134, colors: ['#1a1a1a', '#F5F2EA', '#c8b5ef'], img: HOODIE_IMAGES.soda },
];

const categories = ['All', 'Essentials', 'Heavy Weight', 'Oversized', 'Tech Fleece', 'Cropped', 'Limited'];

/**
 * ProductCard: Individual product tile with hover actions.
 * Styled with Warm Off-White (#F5F2EA) and Charcoal Black (#171717).
 */
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <InView
      className='group relative'
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Card container */}
      <div className='relative overflow-hidden rounded-2xl bg-[#171717]/5'>
        <div className='relative aspect-[4/5] w-full overflow-hidden'>
          <img
            src={product.img}
            alt={product.name}
            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
          />
          <ProgressiveBlur
            className='pointer-events-none absolute bottom-0 left-0 h-[40%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
            blurIntensity={1.5}
          />

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest ${
                product.badge === 'NEW'
                  ? 'bg-[#171717] text-[#F5F2EA]'
                  : product.badge === 'LIMITED'
                  ? 'bg-[#171717] text-[#F5F2EA]'
                  : 'bg-[#F5F2EA] text-[#171717]'
              }`}
            >
              {product.badge}
            </span>
          )}

          {/* Best seller tag */}
          {product.bestSeller && (
            <span className='absolute right-3 top-3 rounded-full bg-[#F5F2EA]/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#171717]'>
              Best seller
            </span>
          )}
        </div>

        {/* Product info */}
        <div className='flex items-center justify-between p-4 bg-[#F5F2EA]'>
          <div className='min-w-0'>
            <p className='text-[10px] font-bold uppercase tracking-widest text-[#171717]/50'>
              {product.category}
            </p>
            <h3 className='mt-0.5 truncate text-[15px] font-semibold text-[#171717]'>
              {product.name}
            </h3>
            <div className='mt-1.5 flex items-center gap-1.5'>
              {product.colors.map((c) => (
                <span
                  key={c}
                  className='h-3 w-3 rounded-full border border-[#171717]/15'
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div className='flex shrink-0 flex-col items-end'>
            <span className='text-[15px] font-bold text-[#171717]'>${product.price}</span>
            {product.oldPrice && (
              <span className='text-[11px] text-[#171717]/40 line-through'>${product.oldPrice}</span>
            )}
          </div>
        </div>
      </div>

      {/* Hover CTA */}
      <button className='absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#171717] text-[#F5F2EA] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
        <Spotlight className='from-white/20 via-white/10 to-transparent' size={50} />
        <ArrowUpRight className='relative h-4 w-4' />
      </button>
    </InView>
  );
}

/**
 * Collections Page: Filterable product grid with sort.
 * Full Warm Off-White (#F5F2EA) + Charcoal Black (#171717) editorial theme.
 */
export function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' });
  const [active, setActive] = useState('All');
  const [sort, setSort] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filtered = products
    .filter((p) => active === 'All' || p.category === active)
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    });

  return (
    <div ref={ref} className='bg-[#F5F2EA] text-[#171717]'>

      {/* Hero */}
      <section className='relative overflow-hidden border-b border-[#171717]/10 pb-14 pt-14 md:pb-20 md:pt-20'>
        <div className='mx-auto max-w-[1400px] px-5 md:px-10'>
          <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#171717]/50'>
            Collections · 2024
          </p>
          <TextEffect
            per='char' as='h1' preset='fade-in-blur' trigger={inView}
            className='display mt-4 text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] text-[#171717]'
          >
            SHOP ALL
          </TextEffect>
          <TextEffect
            per='char' as='h1' preset='fade-in-blur' trigger={inView} delay={0.3}
            className='display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] text-[#171717]/40'
          >
            HEAVY HOODIES
          </TextEffect>
          <p className='mt-6 max-w-xl text-[15px] leading-relaxed text-[#171717]/65'>
            Studio-made, heavyweight cotton fleece — cut for everyday wear and built to outlast the season. 9 pieces in rotation.
          </p>
        </div>
      </section>

      {/* Sticky filter toolbar */}
      <section className='sticky top-16 z-20 border-b border-[#171717]/10 bg-[#F5F2EA]/95 backdrop-blur-md'>
        <div className='mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-5 py-4 md:px-10'>
          <div className='flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#171717]/50'>
            <Filter className='h-3.5 w-3.5' />
            Filter
          </div>

          <div className='flex flex-wrap items-center gap-2'>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                  active === c
                    ? 'border-[#171717] bg-[#171717] text-[#F5F2EA]'
                    : 'border-[#171717]/20 text-[#171717]/70 hover:border-[#171717] hover:text-[#171717]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Sort control */}
          <div className='ml-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#171717]/50'>
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className='rounded-full border border-[#171717]/20 bg-[#F5F2EA] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#171717]'
            >
              <option value='featured'>Featured</option>
              <option value='price-low'>Price · Low to High</option>
              <option value='price-high'>Price · High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className='mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16'>
        <p className='mb-6 text-[12px] font-semibold text-[#171717]/50'>
          Showing {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          {active !== 'All' ? ` in ${active}` : ''}
        </p>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6'>
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className='py-20 text-center'>
            <p className='display text-2xl text-[#171717]'>Nothing in this capsule yet</p>
            <button
              onClick={() => setActive('All')}
              className='mt-4 rounded-full border border-[#171717] px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-[#171717] transition-colors hover:bg-[#171717] hover:text-[#F5F2EA]'
            >
              View all
            </button>
          </div>
        )}
      </section>
    </div>
  );
}