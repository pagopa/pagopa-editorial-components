import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { FundedByNextGenerationEU } from '../../assets/FundedByNextGenerationEU';
import { LogoPagoPACompany } from '../../assets/LogoPagoPACompany';
import { type Generic } from '../../types/components';
import { hrefNoOp, isJSX } from '../../utils/index';
import { EIcon, type EIconProps } from '../EIcon';
import {
  type CompanyLinkType,
  type PreLoginFooterLinksType,
  type PreLoginFooterSingleSectionType,
} from './index';
import { LangSwitch, type LangSwitchProps } from './LangSwitch';

export const LegalInfo = ({
  data,
}: {
  data?: string | Generic | Generic[];
}) => (
  <Box
    sx={{
      borderTop: 1,
      borderColor: 'divider',
      backgroundColor: 'background.paper',
    }}
  >
    <Container sx={{ px: 2, py: 2 }}>
      <Typography
        color="text.primary"
        variant="caption"
        textAlign="center"
        component={isJSX(data) ? 'div' : 'p'}
      >
        {data}
      </Typography>
    </Container>
  </Box>
);

export const FooterColumn = ({
  data,
  companyLink,
  icons,
}: {
  data: PreLoginFooterSingleSectionType;
  companyLink?: CompanyLinkType;
  icons?: EIconProps[];
}) => (
  <Stack spacing={2} display="flex" alignItems={{ xs: 'center', sm: 'start' }}>
    {data?.title && <Typography variant="overline">{data.title}</Typography>}

    {companyLink && (
      <Link
        component="button"
        role="link"
        aria-label={companyLink.ariaLabel}
        href={companyLink.href ?? hrefNoOp}
        sx={{ display: 'inline-flex' }}
      >
        <LogoPagoPACompany />
      </Link>
    )}

    {icons && (
      <Stack
        aria-label="i nostri social"
        spacing={{ xs: 3, sm: 1.5, lg: 3 }}
        direction="row"
        component="ul"
        alignItems={{ xs: 'center', sm: 'start' }}
        sx={{ padding: 0, mt: 0.5, listStyle: 'none' }}
      >
        {icons?.map(
          ({ icon, href = hrefNoOp, onClick, ...rest }, i) =>
            icon && (
              <li key={i}>
                <Link href={href}>
                  <EIcon icon={icon} color="text.primary" {...rest} />
                </Link>
              </li>
            )
        )}
      </Stack>
    )}

    <Stack
      component="ul"
      alignItems={{ xs: 'center', sm: 'start' }}
      textAlign={{ xs: 'center', sm: 'left' }}
      sx={{ padding: 0, listStyle: 'none' }}
    >
      {data?.links.map(({ href = hrefNoOp, label, ariaLabel, onClick }, i) => (
        <li key={i}>
          <Link
            aria-label={ariaLabel}
            component="a"
            href={href}
            onClick={onClick}
            underline="none"
            color="text.primary"
            sx={{ display: 'inline-block', py: 0.5 }}
            variant="subtitle2"
          >
            {label}
          </Link>
        </li>
      ))}
    </Stack>
  </Stack>
);

export interface FooterProps extends LangSwitchProps {
  companyLink: CompanyLinkType;
  legalInfo: string | Generic | Generic[];
  links: PreLoginFooterLinksType;
  showFundedByNextGenerationEULogo?: boolean;
}

export const Footer = ({
  companyLink,
  legalInfo,
  links: { aboutUs, resources, followUs, services },
  showFundedByNextGenerationEULogo = false,
  ...langProps
}: FooterProps) => (
  <Box
    borderColor="divider"
    borderTop={1}
    component="footer"
    px={{ sm: 8, xs: 2 }}
    sx={{ backgroundColor: 'background.paper' }}
  >
    <Container
      maxWidth={false}
      sx={{
        py: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 4,
      }}
    >
      <FooterColumn data={aboutUs} companyLink={companyLink} />
      <FooterColumn data={services} />
      <FooterColumn data={resources} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ sm: 'flex-start', xs: 'center' }}
      >
        <FooterColumn data={followUs} icons={followUs.socialLinks} />
        {!!langProps?.languages?.length && <LangSwitch {...langProps} />}
        {showFundedByNextGenerationEULogo && (
          <FundedByNextGenerationEU size={180} />
        )}
      </Box>
    </Container>
    <LegalInfo data={legalInfo} />
  </Box>
);
