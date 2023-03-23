import { type BannerLinkProps } from 'components/BannerLink';

export const defaults: {
  args: BannerLinkProps;
  ctaButtons: BannerLinkProps['ctaButtons'];
  body: BannerLinkProps['body'];
} = {
  args: {
    theme: 'light',
    title: 'Vuoi diventare un Partner tecnologico qualificato?',
    body: 'Leggi le domande frequenti sull’adesione a pagoPA da parte degli Enti Creditori oppure scrivi a: account@pagopa.it',
    visibleIcon: false,
  },
  body: (
    <p>
      Leggi le domande frequenti sull’adesione a <b>pagoPA</b> da parte degli
      Enti Creditori oppure scrivi a:{' '}
      <a href="mailto:account@pagopa.it">account@pagopa.it</a>
    </p>
  ),
  ctaButtons: [
    {
      text: 'LEGGI LE FAQ',
      onClick: () => {
        alert('LEGGI LE FAQ');
      },
    },
    {
      text: 'LEGGI LE FAQ',
      onClick: () => {
        alert('LEGGI LE FAQ');
      },
    },
  ],
};
