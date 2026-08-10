
import { InfiniteSlider } from '@/components/core/infinite-slider';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { Zap, Aperture, Feather, CircleDot, Globe, Sparkles } from 'lucide-react';

const labels = ['FABRIC', '2026', 'CRAFT', 'COTTON', '[ESSENTIAL]', '[LTD]'];

const brands = [
  { name: 'Loom', Icon: Zap },
  { name: 'Thread', Icon: Aperture },
  { name: 'Felt', Icon: Feather },
  { name: 'Hemp', Icon: CircleDot },
  { name: 'Fleece', Icon: Globe },
  { name: 'Weave', Icon: Sparkles },
];

/**
 * EternalChic Component: Scrolling editorial typography + brand strip.
 * Updated to Warm Off-White (#F5F2EA) and Charcoal Black (#171717) theme.
 */
export function EternalChic() {
  return (
    // Section with subtle charcoal divider on warm off-white background
    <section className='bg-[#F5F2EA] border-b border-[#171717]/10'>
      
      {/* Top label row */}
      <div className='mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-10 text-[10px] font-bold tracking-[0.12em] text-[#171717]/60 md:px-10'>
        {labels.map((l) => (
          <span key={l} className='hidden first:inline sm:inline'>
            {l}
          </span>
        ))}
      </div>

      {/* Large infinite scrolling headline */}
      <div className='relative py-4 md:py-6'>
        <InfiniteSlider gap={48} speed={70} speedOnHover={20}>
          {['COTTON REIGN', 'COTTON REIGN', 'COTTON REIGN'].map((text, i) => (
            <div key={i} className='flex items-center gap-12'>
              <h2 className='display whitespace-nowrap text-[clamp(5rem,14vw,12rem)] leading-none text-[#171717]'>
                {text}
              </h2>
              {/* Minimal charcoal dot separator */}
              <span className='h-4 w-4 shrink-0 rounded-full bg-[#171717]' />
            </div>
          ))}
        </InfiniteSlider>
      </div>

      {/* Brand / Icon slider */}
      <div className='relative mx-auto max-w-[1400px] px-5 pb-12 pt-4 md:px-10'>
        <div className='relative overflow-hidden'>
          <InfiniteSlider gap={72} speed={45} speedOnHover={15}>
            {brands.map(({ name, Icon }) => (
              <div
                key={name}
                className='flex items-center gap-2.5 text-[#171717]/50 transition-colors duration-300 hover:text-[#171717]'
              >
                <Icon className='h-6 w-6' strokeWidth={2.2} />
                <span className='whitespace-nowrap text-xl font-bold tracking-tight'>
                  {name}
                </span>
              </div>
            ))}
          </InfiniteSlider>

          {/* Soft edge blur for editorial fade effect */}
          <ProgressiveBlur
            className='pointer-events-none absolute inset-y-0 left-0 w-24'
            direction='left'
            blurIntensity={1}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute inset-y-0 right-0 w-24'
            direction='right'
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}