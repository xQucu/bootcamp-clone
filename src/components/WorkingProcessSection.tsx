import { useState } from 'react';
import Card from './ProcessCard';
import Header from './Header';

const process: { title: string; description: string }[] = [
  {
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Research and Strategy Development',
    description:
      'We will conduct thorough research on your industry, competitors, and target audience. Based on our findings, we will develop a comprehensive strategy to achieve your business goals.',
  },
  {
    title: 'Implementation',
    description:
      'Our team will execute the strategy by implementing the necessary marketing tactics and campaigns. This may include content creation, social media management, SEO, and more.',
  },
  {
    title: 'Monitoring and Optimization',
    description:
      'We will continuously monitor the performance of our marketing efforts and make data-driven optimizations to ensure the best possible results.',
  },
  {
    title: 'Reporting and Communication',
    description:
      'We will provide regular reports on the progress and performance of our marketing campaigns. We will also maintain open communication with you to address any questions or concerns.',
  },
  {
    title: 'Continual Improvement',
    description:
      'We believe in continuous improvement. We will regularly review and refine our strategies to ensure sustained success and growth for your business.',
  },
];

const WorkingProcessSection = () => {
  const [openID, setOpenID] = useState<number>(0);
  return (
    <div className="flex flex-col items-start gap-[1.875rem]">
      <Header title="Our Working Process">
        Step-by-Step Guide to Achieving Your Business Goals
      </Header>
      {process.map((step, index) => (
        <Card
          key={index}
          title={step.title}
          number={index}
          onToggle={() => setOpenID((prev) => (prev === index ? -1 : index))}
          isOpened={openID === index}>
          {step.description}
        </Card>
      ))}
    </div>
  );
};

export default WorkingProcessSection;
