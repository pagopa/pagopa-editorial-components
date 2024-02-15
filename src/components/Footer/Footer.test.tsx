import { Footer } from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

// TODO: Fix. It's a problem with the font css.
it('renders correctly standard ', () => {
  const tree = renderer
    .create(
      <Footer
        activeLanguage={{
          id: 'it',
          value: 'Italiano',
        }}
        companyLink={{
          ariaLabel: 'Link: vai al sito di PagoPA S.p.A.',
          href: 'https://www.pagopa.it/',
        }}
        languages={[
          {
            id: 'it',
            value: 'Italiano',
          },
          {
            id: 'en',
            value: 'Inglese',
          },
          {
            id: 'fr',
            value: 'Francese',
          },
        ]}
        legalInfo={
          <>
            <strong>PagoPA S.p.A.</strong> — società per azioni con socio unico
            - capitale sociale di euro 1,000,000 interamente versato - sede
            legale in Roma, Piazza Colonna 370,
            <br />
            CAP 00187 - n. di iscrizione a Registro Imprese di Roma, CF e P.IVA
            15376371009
          </>
        }
        links={{
          aboutUs: {
            links: [
              {
                ariaLabel: 'Vai al link: Chi siamo',
                href: '#chi-siamo',
                label: 'Chi siamo',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: PNRR',
                href: '#pnrr',
                label: 'PNRR',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Media',
                href: '#media',
                label: 'Media',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Lavora con noi',
                href: '#lavora-con-noi',
                label: 'Lavora con noi',
                linkType: 'internal',
              },
            ],
            title: undefined,
          },
          followUs: {
            links: [
              {
                ariaLabel: 'Vai al link: Accessibilità',
                href: '#accessibilità',
                label: 'Accessibilità',
                linkType: 'internal',
              },
            ],
            socialLinks: [
              {
                'aria-label': 'Link: vai al sito LinkedIn di PagoPA S.p.A.',
                href: 'https://www.linkedin.com/company/pagopa/',
                icon: 'LinkedIn',
              },
              {
                'aria-label': 'Link: vai al sito Twitter di PagoPA S.p.A.',
                href: 'https://twitter.com/pagopa',
                icon: 'Twitter',
              },
              {
                'aria-label': 'Link: vai al sito Instagram di PagoPA S.p.A.',
                href: 'https://www.instagram.com/pagopa/',
                icon: 'Instagram',
              },
            ],
            title: 'Seguici su',
          },
          resources: {
            links: [
              {
                ariaLabel: 'Vai al link: Informativa Privacy',
                href: '#informativa-privacy',
                label: 'Informativa Privacy',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Certificazioni',
                href: '#certificazioni',
                label: 'Certificazioni',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Sicurezza delle informazioni',
                href: '#sicurezza-delle-informazioni',
                label: 'Sicurezza delle informazioni',
                linkType: 'internal',
              },
              {
                ariaLabel:
                  'Vai al link: Diritto alla protezione dei dati personali',
                label: 'Diritto alla protezione dei dati personali',
                linkType: 'internal',
                onClick: function noRefCheck() {},
              },
              {
                ariaLabel: 'Vai al link: Preferenze Cookie',
                href: '#preferenze-cookie',
                label: 'Preferenze Cookie',
                linkType: 'internal',
                onClick: function noRefCheck() {},
              },
              {
                ariaLabel: 'Vai al link: Termini e Condizioni',
                href: '#terms-conditions',
                label: 'Termini e Condizioni',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Società trasparente',
                href: '#societa-trasparente',
                label: 'Società trasparente',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Responsible Disclosure Policy',
                href: '#responsible-disclosure-policy',
                label: 'Responsible Disclosure Policy',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Modello 321',
                href: '#modello-321',
                label: 'Modello 321',
                linkType: 'internal',
              },
            ],
            title: 'Risorse',
          },
          services: {
            links: [
              {
                ariaLabel: 'Vai al link: App IO',
                href: 'https://www.pagopa.it/it/prodotti-e-servizi/app-io',
                label: 'App IO',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Piattaforma pagoPA',
                href: 'https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-pagopa',
                label: 'Piattaforma pagoPA',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Centro stella',
                href: 'https://www.pagopa.it/it/prodotti-e-servizi/centro-stella-pagamenti-elettronici',
                label: 'Centro stella',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Check IBAN',
                href: 'https://www.pagopa.it/it/prodotti-e-servizi/check-iban',
                label: 'Check IBAN',
                linkType: 'internal',
              },
              {
                ariaLabel: 'Vai al link: Piattaforma Notifiche Digitali',
                href: 'https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-notifiche-digitali',
                label: 'Piattaforma Notifiche Digitali',
                linkType: 'internal',
              },
            ],
            title: 'PRODOTTI E SERVIZI',
          },
        }}
        onLanguageChanged={function noRefCheck() {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
