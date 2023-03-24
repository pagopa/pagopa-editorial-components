import { type ComponentStory } from '@storybook/react';
import Hero from '../../components/Hero';
import { HowTo } from '../../components/HowTo';
import Feature from '../../components/Feature/Feature';
import { Editorial } from '../../components/Editorial';
import PhotoVideo from '../../components/PhotoVideo';
import { Accordion } from '../../components/Accordion';

import heroBackground from '../assets/hero_background.jpg';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import regular from '../assets/Editorial/regular.png';
import portrait from '../assets/Editorial/portrait.png';
import heroDarkSolidBackground from '../assets/hero-solid-dark.jpg';

export default {
  title: 'Firma con IO',
};

const Home = () => {
  const icon = <AccountBalanceIcon fontSize="large" />;
  const itemMockWithoutLink = [
    {
      icon: <AccountBoxIcon />,
      title: 'Semplice',
      subtitle:
        'L’invio, la ricezione e la gestione dei documenti firmati avvengono in maniera immediata con un notevole risparmio di tempo',
    },
    {
      icon: <AccountBoxIcon />,
      title: 'Sicuro',
      subtitle:
        'I cittadini firmano attraverso un canale già noto e affidabile, senza doversi iscrivere a  portali di firma dedicati',
    },
    {
      icon: <AccountBoxIcon />,
      title: 'Conveniente',
      subtitle:
        'Consente a enti e PA di risparmiare sui costi legati alla raccolta firme e gestione documentale',
    },
    {
      icon: <AccountBoxIcon />,
      title: 'Sostenibile',
      subtitle:
        'L’intero processo è interamente digitale, evitando spostamenti e stampa di documenti cartacei',
    },
  ];
  return (
    <>
      <Hero
        title="La soluzione per i firmare i documenti e i contratti della PA direttamente in app."
        subtitle="Firma con IO è la funzionalità integrata nell’app IO che consente di firmare digitalmente i documenti della Pubblica Amministrazione in modo facile, veloce e sicuro. Tutto, senza uscire dall’app."
        theme="dark"
        size="big"
        background={heroBackground}
      />
      <Editorial
        width="wide"
        image={{ src: regular, alt: 'a landscape photo' }}
        ctaButtons={[
          {
            text: 'Leggi le FAQ',
            variant: 'outlined',
            href: 'iframe.html?args=&id=firma-con-io--faq-page&viewMode=story',
          },
        ]}
        eyelet="per i cittadini"
        title="Una firma a valore legale, a disposizione di tutti"
        theme="light"
        body="La Firma con IO è una Firma Elettronica Qualificata “one shot” con il massimo valore legale, pari alla firma autografa, che consente agli enti di digitalizzare l’iter di raccolta firme. Ai cittadini basta avere IO per firmare documenti e contratti direttamente sul proprio smartphone."
      />
      <Editorial
        width="wide"
        image={{ src: portrait, alt: 'a portrait photo' }}
        ctaButtons={[
          {
            text: 'SCOPRI COME FUNZIONA',
          },
          {
            text: 'ADERISCI',
          },
        ]}
        eyelet="per gli enti"
        title="Tutti i processi di firma, senza spostamenti"
        theme="light"
        reversed
        body="Grazie a Firma con IO lo scambio di documenti tra enti e cittadini è immediato. Non serve apporre la firma in presenza o scannerizzare copie cartacee da inviare in pdf: tutto avviene su IO e salvato in automatico in un archivio sempre accessibile.
        Un esempio? Qualsiasi realtà del mondo accademico può gestire da remoto contratti relativi a dottorati, assegni di ricerca o borse di studio che devono essere sottoscritti da studenti o collaboratori, solitamente non dotati di una firma digitale certificata."
      />
      <Feature
        showCarouselMobile={false}
        title="Perché scegliere Firma con IO?"
        theme="dark"
        items={itemMockWithoutLink}
      />
      <HowTo
        title="Come funziona?"
        theme="light"
        steps={[
          {
            icon,
            title: 'Ricevi una richiesta di firma',
            description:
              'L’ente può inviarti una richiesta di firma con un messaggio sull’app IO. È possibile firmare anche dal sito web dell’ente. Per farlo, dovrai aprire i documenti su IO tramite codice QR.',
          },
          {
            icon,
            title: 'Apri i documenti su IO',
            description:
              'Entra nell’app per visualizzare i documenti da firmare, consultare le clausole presenti e le condizioni del servizio.',
          },
          {
            icon,
            title: 'Firma',
            description:
              'Procedi con la firma dei documenti. Per completare l’operazione basta autenticarti tramite riconoscimento biometrico o codice di sblocco.',
          },
          {
            icon,
            title: 'Salva i documenti firmati',
            description:
              'Completata l’operazione, riceverai i documenti firmati tramite messaggio su IO. Puoi scegliere se condividerli o scaricarli sul tuo dispositivo.',
          },
        ]}
      />
      <PhotoVideo src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4" />
    </>
  );
};
const HomeTemplate: ComponentStory<typeof Home> = () => <Home />;

export const HomePage = HomeTemplate.bind({});

const FAQ = () => {
  return (
    <>
      <Hero
        title="FAQ"
        subtitle="Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        theme="dark"
        size="small"
        background={heroDarkSolidBackground}
        useHoverlay={false}
      />
      <Accordion
        title="Generali"
        theme="light"
        layout="center"
        accordionItems={[
          {
            header:
              "Cosa significa che l'app è disponibile negli store in versione open beta?",
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'Perché, dopo un anno di test, l’app è ancora in beta?',
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header:
              'I cittadini possono contribuire allo sviluppo dell’app anche ora che IO è negli store online?',
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'Perchè devo per forza avere SPID o CIE per usare la app?',
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
        ]}
      />
      <Accordion
        title="Per gli enti"
        theme="light"
        layout="center"
        accordionItems={[
          {
            header: 'Quali servizi sono già disponibili sull’app?',
            content:
              'Questo dipende da dove risiedi. Sono già diverse migliaia i servizi erogati dagli enti locali e nazionali tramite IO e molti se ne aggiungeranno in futuro; a questo link puoi consultare la lista, in continuo aggiornamento, di quelli già integrati e disponibili all’interno della sezione Servizi dell’app.',
          },
          {
            header: 'Come posso usare i servizi in lista?',
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'Che tipo di comunicazioni posso ricevere?',
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'Perchè devo per forza avere SPID o CIE per usare la app?',
            content:
              'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
        ]}
      />
    </>
  );
};
const FAQTemplate: ComponentStory<typeof FAQ> = () => <FAQ />;

export const FAQPage = FAQTemplate.bind({});
