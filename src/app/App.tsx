import { HeroSection } from './components/HeroSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="w-full">
        <HeroSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}