import HeroIllustration from '../assets/HeroIllustration.svg';
import Button from './Button';
const HeroSection = () => {
  return (
    <div className="flex flex-wrap-reverse lg:flex-nowrap pt-[8rem] justify-center lg:justify-between">
      <div className="flex flex-col gap-[2.1875rem] w-[33rem]">
        <h1>Navigating the digital landscape for success</h1>
        <p className="leading-7">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button variant="dark" className='w-fit'>Book a consultation</Button>
      </div>
      <div className="flex justify-end w-fit">
        <img src={HeroIllustration} alt="Hero section" />
      </div>
    </div>
  );
};

export default HeroSection;
