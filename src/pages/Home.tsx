import { Hero } from '@/components/sections/Hero';
import { EternalChic } from '@/components/sections/EternalChic';
import { DarkShowcase } from '@/components/sections/DarkShowcase';
import { Categories } from '@/components/sections/Categories';
import { FeelingBolder } from '@/components/sections/FeelingBolder';
import { Confidence } from '@/components/sections/Confidence';

export function Home() {
  return (
    <>
      <Hero />
      <EternalChic />
      <DarkShowcase />
      <Categories />
      <FeelingBolder />
      <Confidence />
    </>
  );
}
