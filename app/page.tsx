import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import InvitationShowcase from "@/components/InvitationShowcase";
import ProjectEstimator from "@/components/ProjectEstimator";
import ProcessSection from "@/components/ProcessSection";
import TechStack from "@/components/TechStack";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <ServicesSection />
        <InvitationShowcase />
        <ProjectEstimator />
        <ProcessSection />
        <TechStack />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Global Footer & Floating Widget */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
