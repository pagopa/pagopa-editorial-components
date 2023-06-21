import { type StatsProps } from 'components/Stats';

export const defaults: { args: StatsProps } = {
  args: {
    theme: 'light',
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
    ],
    eyelet: 'PER I CITTADINI',
    title: 'Non perderti più nessuna notifica',
    body: 'Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all’integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro.',
    kpiCaption: 'Lorem Ipsum dolo sit amet',
  },
};
