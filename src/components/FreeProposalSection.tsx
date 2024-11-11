import doodle from '../assets/ctaDoodle.svg';

const FreeProposalSection = () => {
  return (
    <div className="rounded-[2.8125rem] pb-5 lg:pb-0 bg-light xl:gap-[17.1875rem] px-[3.75rem] lg:h-[21.6875rem] flex items-center justify-between flex-col-reverse lg:flex-row">
      <div className="flex flex-col items-start gap-[1.625rem] shrink-0">
        <h3>Let's make things happen</h3>
        <p className="max-w-[31.25rem]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="py-[1.15rem] px-[2.1875rem] bg-dark text-white rounded-[0.875rem]">
          Get your free proposal
        </button>
      </div>
      <div>
        <img src={doodle} alt="doodle" />
      </div>
    </div>
  );
};

export default FreeProposalSection;
