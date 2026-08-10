
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { InfiniteSlider } from '@/components/core/infinite-slider';
import { Spotlight } from '@/components/core/spotlight';
import { InView } from '@/components/core/in-view';
import { ArrowUpRight } from 'lucide-react';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

const sliderImagesA = [HOODIE_IMAGES.soda, HOODIE_IMAGES.seated, HOODIE_IMAGES.bw, HOODIE_IMAGES.dramatic];
const sliderImagesB = [HOODIE_IMAGES.green, HOODIE_IMAGES.orange, HOODIE_IMAGES.cream, HOODIE_IMAGES.red];

/**
 * DarkShowcase Component: Editorial product highlight section.
 * Updated to Warm Off-White (#F5F2EA) background and Charcoal Black (#171717) accents.
 */
export function DarkShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  return (
    <section className='px-3 py-6 md:px-6 bg-[#F5F2EA]'>
      {/* Main container with Warm Off-White background and Charcoal text */}
      <div ref={ref} className='relative overflow-hidden rounded-3xl bg-[#F5F2EA] text-[#171717]'>
        <div className='mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 pt-16 md:grid-cols-12 md:px-12 md:pt-20'>
          <div className='md:col-span-8'>
            {/* Headline */}
            <TextEffect
              per='word'
              as='h2'
              preset='fade-in-blur'
              trigger={inView}
              speedReveal={0.9}
              className='display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02]'
            >
              {'HEAVIER FABRIC — BETTER FIT'}
            </TextEffect>
          </div>

          {/* Description + Link */}
          <div className='flex flex-col items-start gap-6 md:col-span-4 md:items-end md:pt-3 md:text-right'>
            <TextEffect
              per='word'
              as='p'
              preset='fade'
              trigger={inView}
              delay={0.4}
              className='max-w-[280px] text-[13px] leading-relaxed text-[#171717]/60'
            >
              Heavyweight 480 GSM cotton fleece, milled in Portugal. Garments that soften with every wash and outlive the season.
            </TextEffect>

            <a
              href='#'
              className='group flex items-center gap-1.5 text-[13px] font-bold tracking-wide text-[#171717] underline underline-offset-4 transition-colors hover:text-[#171717]/70'
            >
              LEARN MORE
              <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </a>
          </div>
        </div>

        {/* Scrolling headline band */}
        <div className='relative mt-14 md:mt-10'>
          <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2'>
            <InfiniteSlider gap={40} speed={60}>
              {[0, 1].map((i) => (
                <div key={i} className='display flex items-center gap-10 whitespace-nowrap text-[clamp(3rem,8vw,6.5rem)] leading-none'>
                  <span className='text-[#171717]/90'>COTTON</span>
                  <span className='font-sans text-lg font-bold italic text-[#171717]/60'>New!</span>
                  <span className='outline-text text-[#171717]'>BUILT FOR COLD NIGHTS</span>
                  <span className='font-sans text-lg font-bold italic text-[#171717]/50'>New!</span>
                </div>
              ))}
            </InfiniteSlider>
          </div>

          {/* Center image + CTA */}
          <div className='relative mx-auto flex max-w-[1320px] items-end justify-center gap-6 px-6 md:px-12'>
            <InView
              className='hidden pb-16 text-right md:block'
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            >
              <p className='display text-sm leading-snug tracking-wider text-[#171717]'>
                RECENTLY
                <br />
                DROPPED THIS
                <br />
                2026
              </p>
            </InView>

            <InView
              variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className='relative'
            >
              <div className='group relative w-[260px] overflow-hidden rounded-2xl sm:w-[300px]'>
                <img
                  src={HOODIE_IMAGES.released}
                  alt='Recently released 2024 hoodie'
                  className='aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>

              {/* Minimal editorial CTA button */}
              <button className='absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#171717] px-7 py-3 text-[12px] font-semibold text-[#F5F2EA] transition-opacity duration-300 hover:opacity-90'>
                <Spotlight className='from-white/20 via-white/10 to-transparent' size={70} />
                <span className='relative z-10'>Shop now</span>
              </button>
            </InView>
          </div>
        </div>

        {/* Bottom section */}
        <div className='mx-auto grid max-w-[1320px] grid-cols-1 items-end gap-10 px-6 pb-10 pt-16 md:grid-cols-12 md:px-12 md:pt-24'>
          <div className='hidden md:col-span-5 md:block'>
            <div className='flex h-[300px] space-x-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]'>
              <InfiniteSlider direction='vertical' speed={40}>
                {sliderImagesA.map((src, i) => (
                  <img key={i} src={src} alt='WRAP lookbook' className='aspect-square w-[120px] rounded-[4px] object-cover' />
                ))}
              </InfiniteSlider>
              <InfiniteSlider direction='vertical' reverse speed={40}>
                {sliderImagesB.map((src, i) => (
                  <img key={i} src={src} alt='WRAP lookbook' className='aspect-square w-[120px] rounded-[4px] object-cover' />
                ))}
              </InfiniteSlider>
            </div>
          </div>

          <div className='md:col-span-7 md:text-right'>
            <TextEffect
              per='word'
              as='h2'
              preset='slide'
              trigger={inView}
              delay={0.6}
              className='display text-[clamp(2.6rem,6vw,5rem)] leading-[1.05]'
            >
              {'BUILT — FOR THE LONG WEAR'}
            </TextEffect>
          </div>
        </div>

        {/* Tag buttons */}
        <div className='mx-auto flex max-w-[1320px] flex-wrap items-center gap-3 px-6 pb-12 md:px-12'>
          <button className='relative rounded-full bg-[#171717] px-5 py-2 text-[12px] font-semibold text-[#F5F2EA] transition-opacity duration-200 hover:opacity-90'>
            <Spotlight className='from-white/20 via-white/10 to-transparent' size={70} />
            <span className='relative z-10'>Latest fleece 2026</span>
          </button>

          {['Oversized', 'Cropped', 'Limited Edition'].map((tag) => (
            <button
              key={tag}
              className='rounded-full border border-[#171717]/30 px-5 py-2 text-[12px] font-semibold text-[#171717]/80 transition-all duration-200 hover:border-[#171717] hover:text-[#171717]'
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}