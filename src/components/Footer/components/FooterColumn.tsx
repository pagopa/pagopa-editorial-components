import { Link, Stack, Typography } from '@mui/material';
import { hrefNoOp } from '../../../utils';
import { LogoPagoPACompany } from '../../../assets/LogoPagoPACompany';
import { EIcon, type EIconProps } from '../../EIcon';
import {
  type CompanyLinkType,
  type PreLoginFooterSingleSectionType,
} from '../types';

export interface FooterColumnProps {
  data: PreLoginFooterSingleSectionType;
  companyLink?: CompanyLinkType;
  icons?: EIconProps[];
}

export const FooterColumn = ({
  data,
  companyLink,
  icons,
}: FooterColumnProps) => (
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
