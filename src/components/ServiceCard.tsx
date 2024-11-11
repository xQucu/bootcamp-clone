import IServiceCard from '../models/IServiceCard';
import ArrowIcon from './ArrowIcon';

const background = {
  light: 'bg-light',
  green: 'bg-green',
  dark: 'bg-dark',
};

const ServiceCard = ({
  titleLine1,
  titleLine2,
  image,
  theme,
}: IServiceCard) => {
  return (
    <div
      className={`flex justify-center sm:justify-between p-[3.125rem] flex-wrap-reverse w-[37.5rem] cardOutline ${background[theme]}`}>
      <div className="flex flex-col justify-between">
        <div>
          <h3
            className={`bg-green w-fit rounded-[0.4375rem] px-[0.4375rem] min-w-max ${
              theme === 'light' ? 'bg-green' : 'bg-white'
            }`}>
            {titleLine1}
          </h3>
          <h3
            className={`bg-green w-fit rounded-[0.4375rem] px-[0.4375rem]  ${
              theme === 'light' ? 'bg-green' : 'bg-white'
            }`}>
            {titleLine2}
          </h3>
        </div>
        <button
          className={`flex gap-[0.9375rem] min-w-max items-center pt-3 ${
            theme === 'dark' ? 'text-white' : ''
          }`}>
          <ArrowIcon color={theme === 'dark' ? 'lighter' : 'darker'} />
          Learn more
        </button>
      </div>
      <div className='flex-shrink flex pb-3'>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default ServiceCard;
