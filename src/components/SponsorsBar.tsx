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
    <div className="w-full overflow-hidden flex">
      <div className="flex w-full justify-center">
        <div className="flex flex-wrap justify-between 1animate-infiniteSponsors grayscale w-full">
          {companyLogos.map((logo, i) => (
            <img
              src={logo}
              key={i}
              alt="logo of sponsor"
            />
          ))}
        </div>
        {/* <div className="flex justify-between animate-infiniteSponsors grayscale min-w-max w-[77.5rem]">
          {companyLogos.map((logo, i) => (
            <img
              src={logo}
              key={i}
              alt="logo of sponsor"
              className="mx-[3rem]"
            />
          ))}
        </div> */}
       
      </div>
    </div>
  );
};

export default SponsorsBar;
