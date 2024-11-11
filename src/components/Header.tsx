interface IProps {
  children: string;
  title: string;
}

const Header = ({ children, title }: IProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-10 mb-[2rem] container max-w-[37.5rem] lg:max-w-full lg:justify-self-start justify-self-center items-center">
      <h2 className="bg-green max-h-fit rounded-[0.4375rem] px-[0.4375rem]">
        {title}
      </h2>
      <p className="w-[36.25rem]">{children}</p>
    </div>
  );
};

export default Header;
