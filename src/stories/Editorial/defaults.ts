import regular from '../assets/Editorial/regular.png';

export const defaults = {
  args: {
    theme: 'light',
    image: { src: regular, alt: 'a landscape photo' },
    eyelet: 'per i cittadini',
    title: 'Non perderti più nessuna notifica',
    body: "Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro.",
    ctaButtons: [
      {
        text: 'Accedi',
        onClick: () => {
          alert('Accedi');
        },
      },
      {
        text: 'Scopri di più',
        onClick: () => {
          alert('Scopri di più');
        },
      },
    ],
  },
};
