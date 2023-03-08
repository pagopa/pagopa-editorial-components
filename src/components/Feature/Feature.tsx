import Component from '../Component';
import { Showcase } from '@pagopa/mui-italia';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Subtitle from './Subtitle';

export interface ItemsType {
  icon: JSX.Element;
  title: string;
  subtitle: string | JSX.Element;
}

const Feature = () => {
  const itemMock = [
    {
      icon: <AccountBoxIcon />,
      title: 'Sicuro',
      subtitle: (
        <Subtitle
          subtitle="I tuoi dati e le informazioni contenute negli atti sono al sicuro"
          textLink="Scopri di più"
          url=""
        ></Subtitle>
      ),
    },
    {
      icon: <AccountBoxIcon />,
      title: 'Conveniente',
      subtitle: (
        <Subtitle
          subtitle="Un risparmio di denaro per tutti: cittadini imprese ed enti"
          textLink="Scopri di più"
          url=""
        ></Subtitle>
      ),
    },
    {
      icon: <AccountBoxIcon />,
      title: 'Immediato',
      subtitle: (
        <Subtitle
          subtitle="I tempi di attesa tra l'invio e la ricezione delle notifiche spariscono"
          textLink="Scopri di più"
          url=""
        ></Subtitle>
      ),
    },
  ];

  return (
    <Component>
      <Showcase title={'I Vantaggi'} items={itemMock}></Showcase>
    </Component>
  );
};

export default Feature;
