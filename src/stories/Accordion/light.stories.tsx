import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Accordion } from '../../components/Accordion';
import { defaultValues, getAccordionItems } from './accordionCommons';

export default {
  title: 'Accordion/light',
  component: Accordion,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: defaultValues.title,
    },
    subtitle: {
      control: 'text',
      defaultValue: defaultValues.subtitle,
    },
    description: {
      control: 'text',
      defaultValue: defaultValues.description,
    },
    layout: {
      control: 'inline-radio',
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
    },
    accordionItems: {
      control: { type: 'number', min: 1, step: 1 },
      defaultValue: 4,
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const accordionItems = getAccordionItems(
    args.accordionItems as unknown as number
  );
  return <Accordion {...args} theme="light" accordionItems={accordionItems} />;
};

export const Default = Template.bind({});
