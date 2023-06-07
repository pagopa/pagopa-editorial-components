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

export const RowAndCustomBody = Template.bind({});
RowAndCustomBody.args = {
  direction: 'row',
  body: (
    <p>
      Con <b>Piattaforma Notifiche</b>, ricevi e gestisci nello stesso spazio
      tutti gli atti di notifica che ti inviano Enti e Pubbliche
      Amministrazioni, come multe o certificati elettorali. E, grazie
      all’integrazione con <b>pagoPA</b>, puoi anche pagare eventuali costi.
      Così, risparmi tempo e denaro.
    </p>
  ),
};

export const ColumnOfFive = Template.bind({});
ColumnOfFive.args = {
  body: '',
  kpiValues: [
    {
      value: 30000,
      caption: 'strawberry fields',
      id: '1',
      iconName: 'AllInclusive',
    },
    {
      value: 10,
      caption: 'yellow submarines',
      id: '2',
      iconName: 'Houseboat',
      iconColor: '#f0cf0e',
    },
    { value: 100, caption: 'honey pies', id: '3', iconName: 'PieChart' },
    { value: 532, caption: 'diamonds', id: '4', iconName: 'Diamond' },
    { value: 0, caption: 'lonely people', id: '5' },
  ],
};
