interface IProps {
  children: string;
  isActive: boolean;
  onSelect: () => void;
}

const RadioButton = ({ isActive, children, onSelect }: IProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex items-center gap-3">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.5"
          y="0.5"
          width="29"
          height="29"
          rx="14.5"
          fill="white"
          stroke="black"
        />
        {isActive && <circle cx="15" cy="15" r="8" fill="#B9FF66" />}
      </svg>
      <p>{children}</p>
    </button>
  );
};

export default RadioButton;
