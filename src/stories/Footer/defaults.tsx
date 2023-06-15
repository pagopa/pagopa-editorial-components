import { type FooterProps } from 'components/Footer/Footer';
import {
  type CompanyLinkType,
  type PreLoginFooterLinksType,
} from '../../components/Footer';

const languages = [
  { value: 'Italiano', id: 'it' },
  { value: 'Inglese', id: 'en' },
  { value: 'Francese', id: 'fr' },
];

const links: PreLoginFooterLinksType = {
  services: {
    title: 'PRODOTTI E SERVIZI',
    links: [
      {
        label: 'App IO',
        href: 'https://www.pagopa.it/it/prodotti-e-servizi/app-io',
        ariaLabel: 'Vai al link: App IO',
        linkType: 'internal',
      },
      {
        label: 'Piattaforma pagoPA',
        href: 'https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-pagopa',
        ariaLabel: 'Vai al link: Piattaforma pagoPA',
        linkType: 'internal',
      },
      {
        label: 'Centro stella',
        href: 'https://www.pagopa.it/it/prodotti-e-servizi/centro-stella-pagamenti-elettronici',
        ariaLabel: 'Vai al link: Centro stella',
        linkType: 'internal',
      },
      {
        label: 'Check IBAN',
        href: 'https://www.pagopa.it/it/prodotti-e-servizi/check-iban',
        ariaLabel: 'Vai al link: Check IBAN',
        linkType: 'internal',
      },
      {
        label: 'Piattaforma Notifiche Digitali',
        href: 'https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali',
        ariaLabel: 'Vai al link: Piattaforma Notifiche Digitali',
        linkType: 'internal',
      },
    ],
  },
  aboutUs: {
    title: undefined,
    links: [
      {
        label: 'Chi siamo',
        href: '#chi-siamo',
        ariaLabel: 'Vai al link: Chi siamo',
        linkType: 'internal',
      },
      {
        label: 'PNRR',
        href: '#pnrr',
        ariaLabel: 'Vai al link: PNRR',
        linkType: 'internal',
      },
      {
        label: 'Media',
        href: '#media',
        ariaLabel: 'Vai al link: Media',
        linkType: 'internal',
      },
      {
        label: 'Lavora con noi',
        href: '#lavora-con-noi',
        ariaLabel: 'Vai al link: Lavora con noi',
        linkType: 'internal',
      },
    ],
  },
  // Third column
  resources: {
    title: 'Risorse',
    links: [
      {
        label: 'Informativa Privacy',
        href: '#informativa-privacy',
        ariaLabel: 'Vai al link: Informativa Privacy',
        linkType: 'internal',
      },
      {
        label: 'Certificazioni',
        href: '#certificazioni',
        ariaLabel: 'Vai al link: Certificazioni',
        linkType: 'internal',
      },
      {
        label: 'Sicurezza delle informazioni',
        href: '#sicurezza-delle-informazioni',
        ariaLabel: 'Vai al link: Sicurezza delle informazioni',
        linkType: 'internal',
      },
      {
        label: 'Diritto alla protezione dei dati personali',
        ariaLabel: 'Vai al link: Diritto alla protezione dei dati personali',
        linkType: 'internal',
        onClick: () => {
          console.log('onClick');
        },
      },
      {
        label: 'Preferenze Cookie',
        href: '#preferenze-cookie',
        ariaLabel: 'Vai al link: Preferenze Cookie',
        linkType: 'internal',
        onClick: () => {
          console.log('onClick');
        },
      },
      {
        label: 'Termini e Condizioni',
        href: '#terms-conditions',
        ariaLabel: 'Vai al link: Termini e Condizioni',
        linkType: 'internal',
      },
      {
        label: 'Società trasparente',
        href: '#societa-trasparente',
        ariaLabel: 'Vai al link: Società trasparente',
        linkType: 'internal',
      },
      {
        label: 'Responsible Disclosure Policy',
        href: '#responsible-disclosure-policy',
        ariaLabel: 'Vai al link: Responsible Disclosure Policy',
        linkType: 'internal',
      },
      {
        label: 'Modello 321',
        href: '#modello-321',
        ariaLabel: 'Vai al link: Modello 321',
        linkType: 'internal',
      },
    ],
  },
  // Fourth column
  followUs: {
    title: 'Seguici su',
    socialLinks: [
      {
        icon: 'LinkedIn',
        href: 'https://www.linkedin.com/company/pagopa/',
        'aria-label': 'Link: vai al sito LinkedIn di PagoPA S.p.A.',
      },
      {
        icon: 'Twitter',
        href: 'https://twitter.com/pagopa',
        'aria-label': 'Link: vai al sito Twitter di PagoPA S.p.A.',
      },
      {
        icon: 'Instagram',
        href: 'https://www.instagram.com/pagopa/',
        'aria-label': 'Link: vai al sito Instagram di PagoPA S.p.A.',
      },
    ],
    links: [
      {
        label: 'Accessibilità',
        href: '#accessibilità',
        ariaLabel: 'Vai al link: Accessibilità',
        linkType: 'internal',
      },
    ],
  },
};

const pagoPALink: CompanyLinkType = {
  href: 'https://www.pagopa.it/',
  ariaLabel: 'Link: vai al sito di PagoPA S.p.A.',
};

const companyLegalInfo = (
  <>
    <strong>PagoPA S.p.A.</strong> — società per azioni con socio unico -
    capitale sociale di euro 1,000,000 interamente versato - sede legale in
    Roma, Piazza Colonna 370,
    <br />
    CAP 00187 - n. di iscrizione a Registro Imprese di Roma, CF e P.IVA
    15376371009
  </>
);

export const defaults: { args: FooterProps } = {
  args: {
    links,
    companyLink: pagoPALink,
    legalInfo: companyLegalInfo,
    languages,
    activeLanguage: { value: 'Italiano', id: 'it' },
    onLanguageChanged: (newLang) => {
      console.log(newLang);
    },
  },
};
