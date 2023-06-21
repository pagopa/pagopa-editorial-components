import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Stats } from '../../components/Stats';
import { defaults } from './defaults';

export default {
  component: Stats,
  title: 'Stats/light',
  argTypes: {},
  args: defaults.args,
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
      kpiIcon: { icon: 'AllInclusive' },
    },
    {
      value: 10,
      caption: 'yellow submarines',
      id: '2',
      kpiIcon: { icon: 'Houseboat' },
    },
    {
      value: 100,
      caption: 'honey pies',
      id: '3',
      kpiIcon: { icon: 'PieChart' },
    },
    { value: 532, caption: 'diamonds', id: '4', kpiIcon: { icon: 'Diamond' } },
    { value: 0, caption: 'lonely people', id: '5' },
  ],
};
