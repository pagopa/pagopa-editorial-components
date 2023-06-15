import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

import { FundedByNextGenerationEU } from '../../assets/FundedByNextGenerationEU';
import { LogoPagoPACompany } from '../../assets/LogoPagoPACompany';
import { type Generic } from '../../types/components';
import { hrefNoOp, isJSX, wrapHandleExitAction } from '../../utils/index';
import {
  type PreLoginFooterSingleSectionType,
  type CompanyLinkType,
  type PreLoginFooterLinksType,
  type PreLoginFooterSocialLink,
} from './index';
import { LangSwitch, type LangSwitchProps } from './LangSwitch';

export interface FooterProps extends LangSwitchProps {
  companyLink: CompanyLinkType;
  legalInfo: Generic | Generic[];
  links: PreLoginFooterLinksType;
  onExit?: (exitAction: () => void) => void;
  showFundedByNextGenerationEULogo?: boolean;
}

type iconMapObject = Record<string, JSX.Element>;

const iconMap: iconMapObject = {
  linkedin: <LinkedIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
};

export const FooterColumn = ({
  data,
  onExit,
  companyLink,
  icons,
}: {
  data: PreLoginFooterSingleSectionType;
  onExit?: (exitAction: () => void) => void;
  companyLink?: CompanyLinkType;
  icons?: PreLoginFooterSocialLink[];
}) => (
  <Grid item xs={12} sm={3}>
    <Stack spacing={2} alignItems={{ xs: 'center', sm: 'start' }}>
      {data?.title && <Typography variant="overline">{data.title}</Typography>}

      {companyLink && (
        <Link
          component="button"
          role="link"
          aria-label={companyLink.ariaLabel}
          href={companyLink.href ?? hrefNoOp}
          onClick={wrapHandleExitAction(
            companyLink.href ?? hrefNoOp,
            companyLink.onClick,
            onExit
          )}
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
          {icons?.map(({ icon, href = hrefNoOp, ariaLabel, onClick }, i) => (
            <li key={i}>
              <Link
                aria-label={ariaLabel}
                component="button"
                href={href}
                onClick={wrapHandleExitAction(href, onClick, onExit)}
                underline="none"
                color="text.primary"
                sx={{ display: 'inline-flex' }}
                variant="caption"
              >
                {icon && iconMap[icon]}
              </Link>
            </li>
          ))}
        </Stack>
      )}

      <Stack
        component="ul"
        alignItems={{ xs: 'center', sm: 'start' }}
        textAlign={{ xs: 'center', sm: 'left' }}
        sx={{ padding: 0, listStyle: 'none' }}
      >
        {data?.links.map(
          ({ href = hrefNoOp, label, ariaLabel, onClick }, i) => (
            <li key={i}>
              <Link
                aria-label={ariaLabel}
                component="a"
                href={href}
                onClick={wrapHandleExitAction(href, onClick, onExit)}
                underline="none"
                color="text.primary"
                sx={{ display: 'inline-block', py: 0.5 }}
                variant="subtitle2"
              >
                {label}
              </Link>
            </li>
          )
        )}
      </Stack>
    </Stack>
  </Grid>
);

export const Footer = (props: FooterProps) => {
  const {
    companyLink,
    legalInfo,
    links,
    onExit,
    showFundedByNextGenerationEULogo = false,
    ...langProps
  } = props;
  const { aboutUs, resources, followUs, services } = links;

  return (
    <Box
      sx={{
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
      component="footer"
    >
      <Container
        maxWidth={false}
        sx={{ py: 8, display: 'flex', justifyContent: 'center' }}
      >
        <Grid container spacing={{ xs: 6, sm: 3 }} justifyContent="center">
          <FooterColumn
            data={aboutUs}
            onExit={onExit}
            companyLink={companyLink}
          />
          <FooterColumn data={services} onExit={onExit} />
          <FooterColumn data={resources} onExit={onExit} />
          <Grid item xs={12} sm={3}>
            <FooterColumn
              data={followUs}
              onExit={onExit}
              icons={followUs.socialLinks}
            />

            <LangSwitch {...langProps} />
            {showFundedByNextGenerationEULogo && (
              <FundedByNextGenerationEU size={180} />
            )}
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          borderTop: 1,
          borderColor: 'divider',
          backgroundColor: 'background.paper',
        }}
      >
        <Container sx={{ px: 2, py: 2 }}>
          {isJSX(legalInfo) ? (
            legalInfo
          ) : (
            <Typography
              color="text.primary"
              variant="caption"
              textAlign="center"
            >
              {legalInfo}
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
};
