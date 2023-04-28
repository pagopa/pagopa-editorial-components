import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { type CommonProps } from 'types/components';
import { Content, type EditorialContentProps } from './Content';
import { Ctas, type EditorialCtaProps } from './Ctas';
import { Image, type EditorialImageProps } from './Image';
import EContainer from '../EContainer';

export interface EditorialProps
  extends CommonProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  reversed?: boolean;
  width: 'wide' | 'standard' | 'center';
}

export const Editorial = ({
  image,
  eyelet,
  title,
  body,
  theme,
  ctaButtons,
  reversed,
  pattern = 'none',
  width = 'standard',
}: EditorialProps) => {
  const { palette } = useTheme();

  const backgroundColor =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;

  const columns = {
    wide: 6,
    standard: 5,
    center: 4,
  };

  return (
    <EContainer
      alignItems="center"
      background={backgroundColor}
      direction={{
        md: reversed ? 'row-reverse' : 'row',
        xs: 'column-reverse',
      }}
      py={8}
      spacing={2}
    >
      <Grid item md={columns[width]} sx={styles.half}>
        <Stack gap={4}>
          <Editorial.Content {...{ eyelet, body, title, theme }} />
          <Editorial.Ctas {...{ ctaButtons, theme }} />
        </Stack>
      </Grid>
      <Grid item md={columns[width]} sx={styles.half}>
        <Editorial.Image {...{ pattern, image, theme }} />
      </Grid>
    </EContainer>
  );
};

Editorial.Content = Content;
Editorial.Ctas = Ctas;
Editorial.Image = Image;

const styles = {
  half: {
    display: 'grid',
    justifyContent: 'center',
  },
};
