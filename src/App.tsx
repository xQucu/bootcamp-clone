import ContactSection from './components/ContactSection';
import FreeProposalSection from './components/FreeProposalSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ServicesSection from './components/ServicesSection';
import SponsorsBar from './components/SponsorsBar';
import WorkingProcessSection from './components/WorkingProcessSection';

function App() {
  return (
    <>
      <div className="container mx-auto w-screen flex flex-col justify-center gap-[4.375rem] pt-[1rem] px-2">
        <NavBar />
        <HeroSection />
        <SponsorsBar />
        <ServicesSection />
        <FreeProposalSection />
        <WorkingProcessSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
