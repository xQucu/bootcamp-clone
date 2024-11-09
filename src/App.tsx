import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="px-3 xl:px-[6.25rem] w-screen flex flex-col gap-[4.375rem] pt-[1rem]">
        <NavBar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
