


import { useRef } from 'react';
import { useInView } from 'motion/react';
import { TextEffect } from '@/components/core/text-effect';
import { InView } from '@/components/core/in-view';
import { Spotlight } from '@/components/core/spotlight';
import { ArrowUpRight, MapPin, Calendar, Ruler, Users } from 'lucide-react';
import { HOODIE_IMAGES } from '@/data/hoodieImages';

const stats = [
  { label: 'Founded', value: '2021', Icon: Calendar },
  { label: 'Studio', value: 'Barcelona', Icon: MapPin },
  { label: 'GSM', value: '480 gsm', Icon: Ruler },
  { label: 'Milled in', value: 'Portugal', Icon: Users },
];

const team = [
  { name: 'Marc Vidal', role: 'Founder · Designer', img: HOODIE_IMAGES.blackStudio },
  { name: 'Lia Costa', role: 'Head of Production', img: HOODIE_IMAGES.cream },
  { name: 'Iván Reyes', role: 'Pattern Maker', img: HOODIE_IMAGES.dramatic },
  { name: 'Noa Ferrer', role: 'Studio Manager', img: HOODIE_IMAGES.redSquare },
];

const principles = [
  {
    num: '01',
    title: 'Heavyweight first',
    copy: "Every WRAP hoodie is 480 GSM cotton fleece. We use mid-weight knit only for layering pieces, never for the mainline.",
  },
  {
    num: '02',
    title: 'Cut in studio',
    copy: "Patterns are drafted and graded in-house. We don't buy from trade-show catalogues.",
  },
  {
    num: '03',
    title: 'Milled once',
    copy: "We work with one family-run mill in Northern Portugal. The same fleece, season after season, so colors stay consistent.",
  },
  {
    num: '04',
    title: 'Repair, don\'t replace',
    copy: "Lost a cuff? Snagged the hem? Send it back — we'll repair it for free, for the life of the garment.",
  },
];

/**
 * About Page: Full editorial brand story.
 * Styled with Warm Off-White (#F5F2EA) and Charcoal Black (#171717).
 */
export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' });

  return (
    <div ref={ref} className='bg-[#F5F2EA] text-[#171717]'>

      {/* Hero */}
      <section className='relative overflow-hidden border-b border-[#171717]/10 pb-12 pt-14 md:pb-20 md:pt-20'>
        <div className='mx-auto max-w-[1400px] px-5 md:px-10'>
          {/* Section label */}
          <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#171717]/50'>
            About · Studio
          </p>
          <TextEffect
            per='char' as='h1' preset='fade-in-blur' trigger={inView}
            className='display mt-4 text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] text-[#171717]'
          >
            CUT FROM
          </TextEffect>
          <TextEffect
            per='char' as='h1' preset='fade-in-blur' trigger={inView} delay={0.3}
            className='display text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.9] text-[#171717]/40'
          >
            ONE IDEA
          </TextEffect>
          <p className='mt-6 max-w-2xl text-[15px] leading-relaxed text-[#171717]/65'>
            WRAP is a four-person studio in Barcelona making heavyweight hoodies for cold mornings, long flights, and the days in between. We started with one hoodie in 2021 and never made a second design that wasn't worth wearing.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className='border-b border-[#171717]/10'>
        <div className='mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4 md:px-10 md:py-12'>
          {stats.map((s, i) => (
            <InView
              key={s.label}
              className='group flex items-center gap-3'
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className='flex h-10 w-10 items-center justify-center rounded-full border border-[#171717]/20 transition-colors group-hover:border-[#171717] group-hover:text-[#171717]'>
                <s.Icon className='h-4 w-4' />
              </span>
              <div>
                <p className='text-[10px] font-bold uppercase tracking-widest text-[#171717]/50'>
                  {s.label}
                </p>
                <p className='text-[15px] font-bold'>{s.value}</p>
              </div>
            </InView>
          ))}
        </div>
      </section>

      {/* Image + story split */}
      <section className='mx-auto max-w-[1400px] px-5 py-16 md:grid md:grid-cols-12 md:gap-12 md:px-10 md:py-24'>
        <InView
          className='md:col-span-6'
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <div className='relative overflow-hidden rounded-2xl'>
            <img
              src={HOODIE_IMAGES.cream}
              alt='Studio portrait'
              className='aspect-[4/5] w-full object-cover'
            />
            <Spotlight className='from-white/20 via-white/10 to-transparent' size={200} />
          </div>
        </InView>

        <div className='mt-10 md:col-span-6 md:mt-0 md:pl-4'>
          <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#171717]/50'>
            The story
          </p>
          <h2 className='display mt-3 text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-[#171717]'>
            We wanted a hoodie that didn't fall apart after a winter.
          </h2>
          <div className='mt-6 space-y-4 text-[14px] leading-relaxed text-[#171717]/70'>
            <p>
              In 2021, after years of buying hoodies that pilled by month three, we ordered a single roll of 480 GSM cotton fleece from a family mill in Northern Portugal. We drafted a pattern in the back room of a coworking space in Eixample, cut ten pieces, and sold them to friends.
            </p>
            <p>
              Four years later, the studio is bigger, but the process is the same. We still draft in-house, we still mill with the same family, and we still only make hoodies we'd wear every day of the week.
            </p>
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            {/* Primary CTA — charcoal */}
            <a
              href='/collections'
              className='group relative overflow-hidden rounded-full bg-[#171717] px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-[#F5F2EA] transition-opacity duration-200 hover:opacity-90'
            >
              <Spotlight className='from-white/20 via-white/10 to-transparent' size={80} />
              <span className='relative z-10 inline-flex items-center gap-2'>
                Shop the collection <ArrowUpRight className='h-3.5 w-3.5' />
              </span>
            </a>

            {/* Secondary CTA — outlined */}
            <a
              href='/lookbook'
              className='rounded-full border border-[#171717] px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-[#171717] transition-colors duration-200 hover:bg-[#171717] hover:text-[#F5F2EA]'
            >
              View lookbook
            </a>
          </div>
        </div>
      </section>

      {/* Principles — Charcoal background block */}
      <section className='border-y border-[#171717]/10 bg-[#171717] text-[#F5F2EA]'>
        <div className='mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24'>
          <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F5F2EA]/50'>
            Principles
          </p>
          <h2 className='display mt-3 text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]'>
            Four things we won't compromise.
          </h2>
          <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12'>
            {principles.map((p, i) => (
              <InView
                key={p.num}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Number accent */}
                <p className='display text-[#F5F2EA]/40'>{p.num}</p>
                <h3 className='display mt-2 text-2xl'>{p.title}</h3>
                <p className='mt-3 text-[14px] leading-relaxed text-[#F5F2EA]/65'>{p.copy}</p>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24'>
        <div className='mb-10 flex items-end justify-between gap-4'>
          <div>
            <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#171717]/50'>
              Team
            </p>
            <h2 className='display mt-3 text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-[#171717]'>
              Four people, one studio.
            </h2>
          </div>
          <a
            href='mailto:hello@wrapstudio.com'
            className='hidden text-[12px] font-bold uppercase tracking-widest underline underline-offset-4 transition-colors hover:text-[#171717]/60 md:inline'
          >
            Join the studio →
          </a>
        </div>

        {/* Team grid */}
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6'>
          {team.map((t, i) => (
            <InView
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className='group relative overflow-hidden rounded-2xl'>
                <div className='aspect-[3/4] w-full overflow-hidden'>
                  <img
                    src={t.img}
                    alt={t.name}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                </div>
                {/* Name overlay on hover */}
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171717]/70 to-transparent p-4'>
                  <p className='text-sm font-bold text-[#F5F2EA]'>{t.name}</p>
                  <p className='text-[11px] text-[#F5F2EA]/70'>{t.role}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section className='border-t border-[#171717]/10'>
        <div className='mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24'>
          <div>
            <p className='text-[12px] font-semibold uppercase tracking-[0.2em] text-[#171717]/50'>
              Visit the studio
            </p>
            <h2 className='display mt-3 text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-[#171717]'>
              Drop by, try a hoodie on, stay for coffee.
            </h2>
            <p className='mt-6 max-w-md text-[14px] leading-relaxed text-[#171717]/70'>
              We share the studio with a roastery, so the espresso is good. We open the door Monday to Saturday, 11 to 19.
            </p>
          </div>

          {/* Address card */}
          <div className='rounded-2xl border border-[#171717]/15 p-8'>
            <div className='flex items-start gap-3'>
              <MapPin className='mt-1 h-5 w-5 shrink-0 text-[#171717]' />
              <div>
                <p className='text-[10px] font-bold uppercase tracking-widest text-[#171717]/50'>Address</p>
                <p className='mt-1 text-[15px] font-semibold leading-relaxed'>
                  Carrer de València 240
                  <br />
                  Eixample, 08007 Barcelona
                </p>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-4 text-[13px]'>
              <div>
                <p className='text-[10px] font-bold uppercase tracking-widest text-[#171717]/50'>Hours</p>
                <p className='mt-1 font-semibold'>Mon – Sat</p>
                <p className='text-[#171717]/65'>11:00 – 19:00</p>
              </div>
              <div>
                <p className='text-[10px] font-bold uppercase tracking-widest text-[#171717]/50'>Contact</p>
                <a
                  href='mailto:hello@wrapstudio.com'
                  className='mt-1 block font-semibold transition-colors hover:text-[#171717]/60'
                >
                  hello@wrapstudio.com
                </a>
                <a
                  href='tel:+6208834884923'
                  className='block text-[#171717]/65 transition-colors hover:text-[#171717]'
                >
                  +62 088 348 849 23
                </a>
              </div>
            </div>

            <a
              href='https://maps.google.com/?q=Carrer+de+Val%C3%A8ncia+240+Barcelona'
              target='_blank'
              rel='noreferrer'
              className='mt-8 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest transition-colors hover:text-[#171717]/60'
            >
              Get directions
              <ArrowUpRight className='h-3.5 w-3.5' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}