import HeroIllustration from '../assets/HeroIllustration.svg';
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
        <button className="bg-dark rounded-[0.625rem] w-fit py-5 px-[2.1875rem] text-white">
          Book a consultation
        </button>
      </div>
      <div className="flex justify-end w-fit">
        <img src={HeroIllustration} alt="Hero section" />
      </div>
    </div>
  );
};

export default HeroSection;
