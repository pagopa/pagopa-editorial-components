import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

import { FundedByNextGenerationEU } from '../../assets/FundedByNextGenerationEU';
import { LogoPagoPACompany } from '../../assets/LogoPagoPACompany';
import { type Generic } from '../../types/components';
import { hrefNoOp, isJSX, wrapHandleExitAction } from '../../utils/index';
import { type CompanyLinkType, type PreLoginFooterLinksType } from './index';
import { LangSwitch, type LangSwitchProps } from './LangSwitch';

export interface FooterProps extends LangSwitchProps {
  companyLink: CompanyLinkType;
  legalInfo: Generic | Generic[];
  links: PreLoginFooterLinksType;
  onExit?: (exitAction: () => void) => void;
  showFundedByNextGenerationEULogo?: boolean;
}

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

  type iconMapObject = Record<string, JSX.Element>;

  const iconMap: iconMapObject = {
    linkedin: <LinkedIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
  };

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
          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: 'center', sm: 'start' }}>
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

              <Stack
                component="ul"
                alignItems={{ xs: 'center', sm: 'start' }}
                textAlign={{ xs: 'center', sm: 'left' }}
                sx={{ padding: 0, listStyle: 'none' }}
              >
                {aboutUs?.links.map(
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

          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: 'center', sm: 'start' }}>
              {services?.title && (
                <Typography variant="overline">{services.title}</Typography>
              )}

              <Stack
                component="ul"
                alignItems={{ xs: 'center', sm: 'start' }}
                textAlign={{ xs: 'center', sm: 'left' }}
                sx={{ padding: 0, listStyle: 'none' }}
              >
                {services?.links.map(
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

          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: 'center', sm: 'start' }}>
              {resources?.title && (
                <Typography variant="overline">{resources.title}</Typography>
              )}

              <Stack
                component="ul"
                alignItems={{ xs: 'center', sm: 'start' }}
                textAlign={{ xs: 'center', sm: 'left' }}
                sx={{ padding: 0, listStyle: 'none' }}
              >
                {resources?.links.map(
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

          <Grid item xs={12} sm={3}>
            <Stack spacing={2} alignItems={{ xs: 'center', sm: 'start' }}>
              {followUs?.title && (
                <Typography variant="overline">{followUs.title}</Typography>
              )}

              <Stack
                alignItems={{ xs: 'center', sm: 'start' }}
                marginBottom={{ sm: 10 }}
                component="nav"
              >
                <Stack
                  aria-label="i nostri social"
                  spacing={{ xs: 3, sm: 1.5, lg: 3 }}
                  direction="row"
                  component="ul"
                  alignItems={{ xs: 'center', sm: 'start' }}
                  sx={{ padding: 0, mt: 0.5, listStyle: 'none' }}
                >
                  {followUs?.socialLinks.map(
                    ({ icon, href = hrefNoOp, ariaLabel, onClick }, i) => (
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
                    )
                  )}
                </Stack>

                <Stack
                  component="ul"
                  alignItems={{ xs: 'center', sm: 'start' }}
                  sx={{ padding: 0, margin: 0, listStyle: 'none' }}
                >
                  {followUs?.links.map(
                    ({ href = hrefNoOp, label, ariaLabel, onClick }, i) => (
                      <li key={i}>
                        <Link
                          aria-label={ariaLabel}
                          component="button"
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
              <LangSwitch {...langProps} />
              {showFundedByNextGenerationEULogo && (
                <FundedByNextGenerationEU size={180} />
              )}
            </Stack>
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
