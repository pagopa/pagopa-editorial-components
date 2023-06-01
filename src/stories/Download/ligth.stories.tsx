import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Download from '../../components/Download';
import pdf from '../../stories/assets/sample.pdf';

export default {
  component: Download,
  title: 'Download/ligth ',
  argTypes: {},
} as ComponentMeta<typeof Download>;

const Template: ComponentStory<typeof Download> = (args) => (
  <Download {...args} />
);

export const LightButtons = Template.bind({});

LightButtons.args = {
  theme: 'light',
  type: 'button',
  title: 'Download Area Lorem Ipsum',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  items: [
    {
      label: 'Download 1 Lorem Ipsum',
      fileName: 'sample_1.pdf',
      href: pdf,
    },
    {
      label: 'Download 2 Lorem Ipsum',
      fileName: 'sample_2.pdf',
      href: pdf,
    },
    {
      label: 'Download 3 Lorem Ipsum',
      fileName: 'sample_3.pdf',
      href: pdf,
    },
  ],
};

export const LightLinks = Template.bind({});

LightLinks.args = {
  theme: 'light',
  type: 'link',
  title: 'Download Area Lorem Ipsum',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  items: [
    {
      label: 'Download 1 Lorem Ipsum',
      fileName: 'sample_1.pdf',
      href: pdf,
    },
    {
      label: 'Download 2 Lorem Ipsum',
      fileName: 'sample_2.pdf',
      href: pdf,
    },
    {
      label: 'Download 3 Lorem Ipsum',
      fileName: 'sample_3.pdf',
      href: pdf,
    },
  ],
};
