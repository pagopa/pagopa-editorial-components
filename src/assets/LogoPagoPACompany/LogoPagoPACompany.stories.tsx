import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { LogoPagoPACompany } from './LogoPagoPACompany';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Assets/PagoPA (Company)',
  component: LogoPagoPACompany,
  args: {
    color: 'dark',
    variant: 'default',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof LogoPagoPACompany>;

const Template: ComponentStory<typeof LogoPagoPACompany> = (args) => (
  <LogoPagoPACompany {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'default',
};

export const Negative = Template.bind({});
Negative.args = {
  color: 'light',
};
Negative.parameters = {
  theme: 'dark',
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
};
