import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Footer } from '../../components/Footer';
import { defaults } from './defaults';

export default {
  title: 'Footer/light',
  component: Footer,
  args: defaults.args,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Standard = Template.bind({});
