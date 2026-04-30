import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { SpeakersSection } from './components/SpeakersSection';
import { SponsorshipSection } from './components/SponsorshipSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col">
      <Header />
      <main className="w-full">
        <HeroSection />
        <EventDetailsSection />
        <SpeakersSection />
        <RegistrationSection />
        <SponsorshipSection />
      </main>
      <Footer />
    </div>
  );
}