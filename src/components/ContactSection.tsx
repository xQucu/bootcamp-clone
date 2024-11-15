import Header from './Header';


const ContactSection = () => {
  return (
    <div>
      <Header title="Contact Us">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </Header>
      <div className="px-[3.75rem] sm:px-[6.25rem] pt-[3.75rem] pb-[5rem] flex justify-between bg-light rounded-[2.8125rem] lg:bg-contactFormPure bg-contactFormGradient bg-no-repeat bg-right ">
        <form
          action=""
          className="flex flex-col gap-[2.5rem] w-full max-w-[34.75rem]">
          <div className="flex gap-[2.1875rem]">
            <span>
              {/* //TODO change radio buttons to custom svgs with default marked as say hi*/}
              {/* //todo create button component with 2 colors and outline mode*/}
              <input
                type="radio"
                name="Action"
                id="SayHi"
                className="mr-2 accent-green"
              />
              <label htmlFor="Action">Say Hi</label>
            </span>
            <span>
              <input
                type="radio"
                name="Action"
                id="GetQuote"
                className="mr-2 accent-green"
              />
              <label htmlFor="Action">Get a Quote</label>
            </span>
          </div>
          <div className="flex flex-col gap-[0.3125rem]">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
              className="border rounded-[0.875rem] py-5 px-[1.875rem] border-black"
            />
          </div>
          <div className="flex flex-col gap-[0.3125rem]">
            <label htmlFor="Email">Email*</label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
              className="border rounded-[0.875rem] py-5 px-[1.875rem] border-black"
            />
          </div>
          <div className="flex flex-col gap-[0.3125rem]">
            <label htmlFor="Message">Message*</label>
            <textarea
              name="Message"
              id="Message"
              placeholder="Message"
              className="resize-none border rounded-[0.875rem] py-5 px-[1.875rem] border-black min-h-[11.875rem]"></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-dark py-5 px-[2.1875rem] rounded-[0.875rem] leading-7">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
