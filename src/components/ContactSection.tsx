import { useState } from 'react';
import Header from './Header';
import RadioButton from './RadioButton';
import Button from './Button';

interface IFormData {
  action: 'SayHi' | 'GetQuote';
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<IFormData>({
    action: 'SayHi',
    name: '',
    email: '',
    message: '',
  });

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // do sth with the data
    // and show the response
    // ...
    // clear the form
    setFormData({
      action: 'SayHi',
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <div>
      <Header title="Contact Us">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </Header>
      <div className="px-0 extraSm:px-[3.75rem] sm:px-[6.25rem] pt-[3.75rem] pb-[5rem] flex justify-between bg-light rounded-[2.8125rem] lg:bg-contactFormPure bg-contactFormGradient bg-no-repeat bg-right ">
        <form
          onSubmit={handleForm}
          className="flex flex-col gap-[2.5rem] w-full max-w-[34.75rem]">
          <div className="flex gap-[2.1875rem] items-center">
            <div>
              {/* //todo create button component with 2 colors and outline mode*/}
              <RadioButton
                isActive={formData.action === 'SayHi'}
                onSelect={() =>
                  setFormData((prev) => ({ ...prev, action: 'SayHi' }))
                }>
                Say Hi
              </RadioButton>
            </div>
            <div>
              <RadioButton
                isActive={formData.action === 'GetQuote'}
                onSelect={() =>
                  setFormData((prev) => ({ ...prev, action: 'GetQuote' }))
                }>
                Get a Quote
              </RadioButton>
            </div>
          </div>
          <div className="flex flex-col gap-[0.3125rem]">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
              className="border rounded-[0.875rem] py-5 px-[1.875rem] border-black"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
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
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-[0.3125rem]">
            <label htmlFor="Message">Message*</label>
            <textarea
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              name="Message"
              id="Message"
              placeholder="Message"
              className="resize-none border rounded-[0.875rem] py-5 px-[1.875rem] border-black min-h-[11.875rem]"
              value={formData.message}
            />
          </div>
            <Button variant="dark">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
