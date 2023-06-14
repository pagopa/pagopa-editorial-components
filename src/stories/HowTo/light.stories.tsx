import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HowTo, type HowToProps } from '../../components/HowTo';
import { getSteps, howToLink } from './howToCommons';

export default {
  title: 'HowTo/light',
  component: HowTo,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Come funziona',
    },
    rowMaxSteps: {
      control: { type: 'number', min: 1, step: 1 },
      defaultValue: 4,
    },
    stepsAlignment: {
      control: { type: 'inline-radio' },
      defaultValue: 'center',
      options: ['left', 'center', 'right'],
    },
  },
} as ComponentMeta<typeof HowTo>;

const Template: ComponentStory<typeof HowTo> = (args) => {
  return <HowTo {...args} theme="light" />;
};

export const WithIcons = (args: HowToProps) => {
  const steps = getSteps(true);
  return <Template {...args} steps={steps} />;
};

export const NoIcons = (args: HowToProps) => {
  const steps = getSteps(false);
  return <Template {...args} steps={steps} />;
};

export const WithBottomLink = (args: HowToProps) => {
  const steps = getSteps(false);
  return <Template {...args} steps={steps} link={howToLink} />;
};
