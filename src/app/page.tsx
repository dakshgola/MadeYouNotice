import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Preloader from "@/components/Preloader";

// Lazy load below-the-fold components
const ShowcaseSection = dynamic(() => import("@/components/ShowcaseSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

export const metadata = {
  title: 'Made You Notice | Creative Agency',
  description: 'We create cinematic reels that make people stop scrolling. You don’t need content. You need attention.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-textPrimary overflow-hidden font-sans">
      <Preloader />
      <HeroSection />
      <ShowcaseSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      
      <footer className="py-8 text-center text-textSecondary border-t border-white/5 bg-secondary text-sm relative z-10 w-full">
        <p>© {new Date().getFullYear()} Made You Notice. All rights reserved.</p>
      </footer>
    </main>
  );
}
