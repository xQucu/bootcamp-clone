import Header from './Header';
import ServiceCard from './ServiceCard';
import IServiceCard from '../models/IServiceCard';

import imageMagnifier from '../assets/image-magnifier.png';
import browserWindow from '../assets/browser-window.png';
import emoticonsWindow from '../assets/emoticonsWindow.png';
import sendingMessages from '../assets/sendingMessages.png';
import browserTabs from '../assets/browserTabs.png';
import analyticTabs from '../assets/analyticTabs.png';

const servicesCards: IServiceCard[] = [
  {
    titleLine1: 'Search engine',
    titleLine2: 'optimization',
    image: imageMagnifier,
    theme: 'light',
  },
  {
    titleLine1: 'Pay-per-click',
    titleLine2: 'advertising',
    image: browserWindow,
    theme: 'green',
  },
  {
    titleLine1: 'Social Media',
    titleLine2: 'Marketing',
    image: emoticonsWindow,
    theme: 'dark',
  },
  {
    titleLine1: 'Email',
    titleLine2: 'Marketing',
    image: sendingMessages,
    theme: 'light',
  },
  {
    titleLine1: 'Content',
    titleLine2: 'Creation',
    image: browserTabs,
    theme: 'green',
  },
  {
    titleLine1: 'Analytics and',
    titleLine2: 'Tracking',
    image: analyticTabs,
    theme: 'dark',
  },
];

const ServicesSection = () => {
  return (
    <div>
      <Header title={'Services'}>
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </Header>
      <div className="flex justify-center xl:justify-between flex-wrap  gap-[2.5rem]">
        {servicesCards.map(
          ({ titleLine1, titleLine2, image, theme }, index) => (
            <ServiceCard
              key={index}
              titleLine1={titleLine1}
              titleLine2={titleLine2}
              image={image}
              theme={theme}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
