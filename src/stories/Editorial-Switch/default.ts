import regular from '../assets/Editorial/regular.png';

export const editorialSwitchDefaults = {
  args: {
    width: 'standard',
    reversed: false,
    toptitle: 'Quando si perfeziona una notifica?',
    topsubtitle:
      'Una notifica si perfeziona il giorno e l’ora in cui visualizzi online i documenti notificati o, se non lo fai entro un certo termine, a seconda del canale con cui l’hai ricevuta. Seleziona i canali qui sotto per conoscere le tempistiche del perfezionamento.',
    buttons: ['PEC', 'Raccomandata', 'App IO', 'SEND', 'Email o SMS'],
    content: [
      {
        title: 'dopo 7 o 15 giorni',
        body: 'Se hai ricevuto la PEC, si perfeziona 7 giorni dopo la data di consegna. Se l’hai ricevuta dalle 21:00 in poi, conta a partire dal giorno dopo. Se la PEC è satura, non valida o inattiva, si perfeziona 15 giorni dopo la data di emissione dell’avviso di mancato recapito. Lo troverai su SEND, nel dettaglio della notifica. Se visualizzi su SEND o app IO i documenti notificati prima delle tempistiche indicate qui sopra, il perfezionamento avviene al momento della visualizzazione.',
        eyelet: 'LA NOTIFICA SI PERFEZIONA',
        // ctaButtons: [
        //   {
        //     text: 'Button 1',
        //     onClick: () => {
        //       console.log('Action 1');
        //     },
        //   },
        //   {
        //     text: 'Button 2',
        //     onClick: () => {
        //       console.log('Action 2');
        //     },
        //   },
        // ],
        pattern: 'none',
        image: { src: regular, alt: 'Immagine di default' },
      },
      {
        title: 'dopo 10 o 20 giorni',
        body: 'Se hai ricevuto la raccomandata, si perfeziona 10 giorni dopo la data di ricezione; Se hai ricevuto un avviso di giacenza e ritiri la raccomandata entro 10 giorni, si perfeziona 10 giorni dopo la data di ritiro; Se hai ricevuto un avviso di giacenza e non ritiri la raccomandata entro 10 giorni, si perfeziona 20 giorni dopo la data di ricezione dell’avviso di giacenza. Se visualizzi su SEND o app IO i documenti notificati prima delle tempistiche indicate qui sopra, il perfezionamento avviene al momento della visualizzazione.',
        eyelet: 'LA NOTIFICA SI PERFEZIONA',
        pattern: 'none',
        image: { src: regular, alt: 'Immagine di default' },
      },
      {
        title: 'il giorno in cui apri il messaggio',
        body: 'che hai ricevuto su IO dal servizio “SEND - Notifiche digitali”, a meno che non si sia già perfezionata tramite visualizzazione su SEND o per decorrenza termini dopo la ricezione della PEC o della raccomandata.',
        eyelet: 'LA NOTIFICA SI PERFEZIONA',
        pattern: 'none',
        image: { src: regular, alt: 'Immagine di default' },
      },
      {
        title: 'il giorno in cui la visualizzi',
        body: 'dopo avere effettuato l’accesso a SEND con SPID o CIE e avere premuto sulla notifica, a meno che non si sia già perfezionata tramite visualizzazione su app IO o per decorrenza termini dopo la ricezione della PEC o della raccomandata.',
        eyelet: 'LA NOTIFICA SI PERFEZIONA',
        pattern: 'none',
        image: { src: regular, alt: 'Immagine di default' },
      },
      {
        title: 'il giorno in cui la visualizzi',
        body: 'dopo avere effettuato l’accesso a SEND con SPID o CIE e avere premuto sulla notifica, a meno che non si sia già perfezionata tramite visualizzazione su app IO o per decorrenza termini dopo la ricezione della PEC o della raccomandata.',
        eyelet: 'LA NOTIFICA SI PERFEZIONA',
        pattern: 'none',
        image: { src: regular, alt: 'Immagine di default' },
      },
    ],
  },
};

export default editorialSwitchDefaults;
