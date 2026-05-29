import { unstable_setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import { Services } from '@/components/Services';
import { DoctorCard } from '@/components/DoctorCard';
import { Reviews } from '@/components/Reviews';
import { TipsNews } from '@/components/TipsNews';
import { Appointment } from '@/components/Appointment';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <WhyUs />
        <DoctorCard />
        <Reviews />
        <TipsNews />
        <Appointment />
        <Location />
      </main>
      <Footer />
    </>
  );
}
