import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <>
      <div className="container mx-auto w-screen flex flex-col gap-[4.375rem] pt-[1rem]">
        <NavBar />
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
}

export default App;
