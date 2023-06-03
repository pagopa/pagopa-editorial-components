import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Stats } from '../../components/Stats';
import { defaults } from './defaults';

export default {
  component: Stats,
  title: 'Stats/dark',
  argTypes: {},
  args: { ...defaults.args, theme: 'dark' },
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;

export const Column = Template.bind({});

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
};

export const ColumnOfFive = Template.bind({});
ColumnOfFive.args = {
  body: '',
  kpiValues: [
    { value: 30000, caption: 'strawberry fields', id: '1' },
    { value: 10, caption: 'yellow submarines', id: '2' },
    { value: 100, caption: 'honey pies', id: '3' },
    { value: 532, caption: 'diamonds', id: '4' },
    { value: 0, caption: 'lonely people', id: '5' },
  ],
};
