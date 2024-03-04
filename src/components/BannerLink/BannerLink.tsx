import { alpha, Box, Container, Stack, useTheme } from '@mui/material';
import { Ctas, type CtaProps } from '../../components/Ctas';
import { type Generic, type CommonProps } from 'types/components';
import {
  type BannerLinkContentProps,
  Content as BannerLinkContent,
} from './Content';
import { isJSX } from '../../utils';
import { sendTheme } from '../../types/SendTheme';

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface BannerLinkProps
  extends CommonProps,
    BannerLinkContentProps,
    CtaProps {
  decoration?: ImgProps | Generic;
}

export const BannerLink = (props: BannerLinkProps) => {
  const { theme, body, title, ctaButtons, decoration = <></> } = props;
  const { palette } = useTheme();

  const backgroundColor =
    theme === 'dark'
      ? sendTheme.dark.backgroundColor
      : alpha(palette.info.main, 0.08);

  return (
    <Box bgcolor={backgroundColor} component="section">
      <Container>
        <Stack gap={4} sx={styles.main}>
          {decoration ? (
            isJSX(decoration) ? (
              decoration
            ) : (
              <img {...decoration} />
            )
          ) : null}
          <BannerLinkContent {...{ body, title, theme }} />
          {ctaButtons?.length && <Ctas theme={theme} ctaButtons={ctaButtons} />}
        </Stack>
      </Container>
    </Box>
  );
};

const styles = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: { md: '64px 24px', xs: '32px 24px' },
  },
};
