import plusIcon from '../assets/PlusIcon.svg';
import minusIcon from '../assets/MinusIcon.svg';

interface IProps {
  children: string;
  title: string;
  number: number;
  isOpened: boolean;
  onToggle: () => void;
}

const Card = ({ children, title, number, isOpened, onToggle }: IProps) => {
  const no = String(number + 1).padStart(2, '0');
  return (
    <div
      className={`cardOutline w-full py-[2.5625rem] px-5 sm:px-[3.75rem] ${
        isOpened ? 'bg-green' : 'bg-light'
      }`}>
      <div className="flex justify-between items-center ">
        <div className="flex gap-[1.5625rem] items-center font-medium ">
          <span className="text-2xl md:text-6xl">{no}</span>
          <span className="text-xl md:text-3xl">{title}</span>
        </div>
        <button onClick={onToggle} className="size-10 md:size-[3.625rem] shrink-0">
          {isOpened ? (
            <img src={minusIcon} alt="minus icon" />
          ) : (
            <img
              src={plusIcon}
              alt="plus icon"
              className="w-[3.625rem] h-[3.625rem]"
            />
          )}
        </button>
      </div>
      {isOpened && (
        <div className="pt-[1.87rem]">
          <hr className="border-[0.0625rem] border-black" />
          <div className="pt-[1.87rem]">
            <p>{children}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
