import Navbar from '@/components/Navbar';
import HeroTriptych from '@/components/HeroTriptych';
import AppFrameSection from '@/components/AppFrameSection';
import ServicesSection from '@/components/ServicesSection';
import InvitationsSection from '@/components/InvitationsSection';
import ProcessSection from '@/components/ProcessSection';
import StatementSection from '@/components/StatementSection';
import QuoteSection from '@/components/QuoteSection';
import FAQSection from '@/components/FAQSection';
import Footer, { ActionBar } from '@/components/Footer';
import KitRunner from '@/components/KitRunner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroTriptych />
        <AppFrameSection />
        <ServicesSection />
        <InvitationsSection />
        <ProcessSection />
        <StatementSection />
        <QuoteSection />
        <FAQSection />
      </main>
      <Footer />
      <ActionBar />
      <KitRunner />
    </>
  );
}
