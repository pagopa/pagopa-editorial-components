import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Accordion } from '../components/Accordion';

const getAccorgionItems = (num: number) =>
  new Array(num).fill({
    header: 'Header',
    content:
      'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
  });

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'I Vantaggi',
    },
    subtitle: {
      control: 'text',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    description: {
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      defaultValue: 'light',
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
  const accordionItems = getAccorgionItems(
    args.accordionItems as unknown as number
  );
  return <Accordion {...args} accordionItems={accordionItems} />;
};

export const Default = Template.bind({});
