interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: 'green' | 'dark' | 'outline';
}
const styling = {
  common: 'py-5 px-[2.1875rem] rounded-[0.875rem] leading-7',
  outline: 'border border-dark ',
  dark: 'bg-dark text-white ',
  green: 'bg-green',
};

const Button = ({ children, variant, ...rest }: IProps) => {
  return (
    <button
      className={`${styling[variant]} ${styling.common} ${
        rest?.className || ''
      }`}>
      {children}
    </button>
  );
};

export default Button;
