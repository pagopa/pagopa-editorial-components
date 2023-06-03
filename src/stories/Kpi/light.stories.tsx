import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Kpi } from '../../components/Kpi';
import { defaults } from './defaults';

export default {
  component: Kpi,
  title: 'Kpi/light',
  argTypes: {},
  args: defaults.args,
} as ComponentMeta<typeof Kpi>;

const Template: ComponentStory<typeof Kpi> = (args) => <Kpi {...args} />;

export const Standard = Template.bind({});
