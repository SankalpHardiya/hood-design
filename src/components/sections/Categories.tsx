import { Cursor } from '@/components/core/cursor';
import { InView } from '@/components/core/in-view';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { HOODIE_CATEGORY_IMAGES, HOODIE_IMAGES } from '@/data/hoodieImages';
import { cn } from '@/utils/cn';

const categories = [
  { label: 'ESSENTIALS', count: 22, align: 'md:pl-40' },
  { label: 'OVERSIZED', count: 18, align: 'md:pl-16' },
  { label: 'HEAVY WEIGHT', count: 31, align: '', active: true },
  { label: 'ZIP', count: 14, align: 'md:pl-28' },
  { label: 'TECH FLEECE', count: 12, align: 'md:pl-10' },
  { label: 'CROPPED', count: 9, align: 'md:pl-20' },
  { label: 'LIMITED', count: 7, align: 'md:pl-32' },
];

function CategoryRow({ label, count, align, active, index }: { label: string; count: number; align: string; active?: boolean; index: number }) {
  return (
    <InView
      variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn('relative w-fit cursor-none', align)}>
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: 'auto', opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0.1 }}
          className='overflow-hidden rounded-lg'
          springConfig={{ bounce: 0.01 }}
        >
          <img src={HOODIE_CATEGORY_IMAGES[label]} alt={`${label} category`} className='h-40 w-32 rounded-lg object-cover' />
        </Cursor>
        <a
          href='#'
          className={cn(
            'display group flex items-start gap-1 text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.08] transition-colors duration-300',
            active ? 'text-ink dark:text-white' : 'text-ink/25 hover:text-ink dark:text-white/20 dark:hover:text-white'
          )}
        >
          {label}
          <span className={cn(
            'mt-3 flex h-6 w-6 items-center justify-center rounded-full font-sans text-[10px] font-bold transition-colors duration-300',
            active ? 'bg-flame text-white' : 'bg-ink/10 text-ink/50 group-hover:bg-flame group-hover:text-white dark:bg-white/10 dark:text-white/60 dark:group-hover:bg-flame'
          )}>
            {count}
          </span>
        </a>
      </div>
    </InView>
  );
}

export function Categories() {
  return (
    <section className='grid-guides relative border-b border-stone-line dark:border-white/10'>
      <div className='mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 py-20 md:grid-cols-12 md:gap-6 md:px-10 md:py-28'>
        <div className='flex flex-row gap-8 md:col-span-3 md:flex-col md:justify-between'>
          <InView variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
            <div className='group relative w-[160px] overflow-hidden rounded-xl md:w-[180px]'>
              <img src={HOODIE_IMAGES.cream} alt='Bearded model in white hoodie' className='aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105' />
              <ProgressiveBlur className='pointer-events-none absolute bottom-0 left-0 h-[40%] w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100' blurIntensity={1.5} />
              <p className='absolute bottom-3 left-3 right-3 text-[11px] font-semibold leading-snug text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                Heavyweight fleece — 480 gsm
              </p>
            </div>
            <p className='mt-3 max-w-[180px] text-[12px] font-semibold leading-snug dark:text-white/70'>
              Off-White Heavy Hoodie{' '}
              <span className='font-medium text-mute dark:text-white/40'>Built For Layering.</span>
            </p>
          </InView>

          <InView variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, delay: 0.15 }} className='self-end md:self-auto md:pl-16'>
            <div className='group w-[130px] overflow-hidden rounded-xl md:w-[150px]'>
              <img src={HOODIE_IMAGES.orange} alt='Model in an orange hoodie' className='aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105' />
            </div>
            <p className='mt-3 text-[12px] font-semibold leading-snug dark:text-white/70'>
              Burnt Orange Edition{' '}
              <span className='block font-medium text-mute dark:text-white/40'>Studio Capsule</span>
            </p>
          </InView>
        </div>

        <div className='flex flex-col items-start gap-2 md:col-span-6 md:items-center'>
          <div className='flex flex-col gap-2'>
            {categories.map((c, i) => (
              <CategoryRow key={c.label} {...c} index={i} />
            ))}
          </div>
        </div>

        <div className='md:col-span-3'>
          <InView variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }} className='md:pt-4'>
            <div className='group w-full max-w-[220px] overflow-hidden rounded-xl md:ml-auto'>
              <img src={HOODIE_IMAGES.black} alt='Side profile of model in black hoodie' className='aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105' />
            </div>
            <p className='mt-4 max-w-[220px] text-[12px] font-semibold leading-snug md:ml-auto dark:text-white/70'>
              Black Pullover Hoodie{' '}
              <span className='font-medium text-mute dark:text-white/40'>The Modern Staple</span>
            </p>
          </InView>
        </div>
      </div>
    </section>
  );
}
