import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { PreHeader } from '../../components/PreHeader';
import { defaults } from './defaults';

export default {
  component: PreHeader,
  title: 'PreHeader/light',
  argTypes: {},
  args: defaults.args,
} as ComponentMeta<typeof PreHeader>;

const Template: ComponentStory<typeof PreHeader> = (args) => (
  <PreHeader {...args} />
);

export const Standard = Template.bind({});
