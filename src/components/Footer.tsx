import LinkedInIcon from '../assets/LinkedInIconSvg.svg';
import facebookIcon from '../assets/FacebookIcon.svg';
import tweeterIcon from '../assets/TweeterIcon.svg';
import Button from './Button';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="flex flex-col rounded-t-[2.8125rem] gap-[3.125rem] bg-dark pt-[3.44rem] pb-[3.12rem] px-4 extraSm:px-[3.75rem] text-white">
      <div className="flex flex-col gap-[4.125rem]">
        <div className="flex gap-6 justify-between flex-wrap">
          <Logo color="white" />
          <div className="flex gap-3 sm:gap-[2.5rem] flex-wrap text-[1.125rem]  ">
            <a
              href=""
              className="hover:cursor-pointer underline-offset-2 underline">
              About us
            </a>
            <a
              href=""
              className="hover:cursor-pointer underline-offset-2 underline">
              Services
            </a>
            <a
              href=""
              className="hover:cursor-pointer underline-offset-2 underline">
              Use Cases
            </a>
            <a
              href=""
              className="hover:cursor-pointer underline-offset-2 underline">
              Pricing
            </a>
            <a
              href=""
              className="hover:cursor-pointer underline-offset-2 underline">
              Blog
            </a>
          </div>
          <div className="flex gap-[1.25rem]">
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={tweeterIcon} alt="Tweeter Icon" />
          </div>
        </div>
        <div className="flex flex-wrap-reverse justify-between gap-10">
          <div className="flex flex-col gap-[1.6875rem] ">
            <div className="w-fit px-[0.4375rem] bg-green rounded-[0.4375rem]">
              <h4 className="text-black">Contact us:</h4>
            </div>
            <div className="flex flex-col gap-[1.25rem]">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>
          <form className="bg-[#292A32] max-w-full rounded-[0.875rem] flex flex-wrap items-center gap-[1.25rem] py-[3.625rem] px-3 extraSm:px-10">
            <input
              type="email"
              name="news"
              id="news"
              placeholder="Email"
              className="py-[1.375rem] max-w-full px-[2.1875rem] rounded-[0.625rem] bg-inherit border border-white"
            />
            <Button variant="green" className="text-black min-w-fit">
              Subscribe to news
            </Button>
          </form>
        </div>
      </div>
      <hr className="border-[0.0625rem] border-white" />
      <div className="flex gap-[2.5rem] leading-7">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a className="underline hover:cursor-pointer" download={true}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
