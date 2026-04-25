import ArrivalsSection from '@/components/home/ArrivalsSection';
import SubscribeSection from '@/components/home/SubscribeSection';
import ConciergeSection from '@/components/home/ConciergeSection';
import BestProductSection from '@/components/home/BestProductSection';
import CarSection from '@/components/home/CarSection';
import HeroSection from '@/components/home/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarSection />
      <BestProductSection />
      <ArrivalsSection />
      <ConciergeSection />
      <SubscribeSection />
    </>
  );
}
