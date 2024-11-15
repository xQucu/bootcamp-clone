import CompanyLogo0 from '../assets/Company-logo.png';
import CompanyLogo1 from '../assets/Company-logo-1.png';
import CompanyLogo2 from '../assets/Company-logo-2.png';
import CompanyLogo3 from '../assets/Company-logo-3.png';
import CompanyLogo4 from '../assets/Company-logo-4.png';
import CompanyLogo5 from '../assets/Company-logo-5.png';

const companyLogos = [
  CompanyLogo0,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  CompanyLogo5,
];

const SponsorsBar = () => {
  return (
    <div className="w-full  flex overflow-hidden">
      <div className="flex w-full ">
        <div className="flex flex-wrap justify-between animate-infiniteSponsors xl:animate-none grayscale w-full min-w-[77.5rem] px-7">
          {companyLogos.map((logo, i) => (
            <img src={logo} key={i} alt="logo of sponsor" />
          ))}
        </div>
        <div className="flex flex-wrap justify-between animate-infiniteSponsors xl:animate-none xl:hidden grayscale w-full min-w-[77.5rem] px-7">
          {companyLogos.map((logo, i) => (
            <img src={logo} key={i} alt="logo of sponsor" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsBar;
