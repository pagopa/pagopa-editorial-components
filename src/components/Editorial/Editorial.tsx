import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { type CommonProps } from 'types/components';
import {
  Content as EditorialContent,
  type EditorialContentProps,
} from './Content';
import { Ctas as EditorialCtas, type EditorialCtaProps } from './Ctas';
import { Image as EditorialImage, type EditorialImageProps } from './Image';
import EContainer from '../EContainer';
import sendTheme from '../SendTheme';

export interface EditorialProps
  extends CommonProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  reversed?: boolean;
  width: 'wide' | 'standard' | 'center';
}

export const Editorial = (props: EditorialProps) => {
  const {
    image,
    eyelet,
    title,
    body,
    theme,
    ctaButtons,
    reversed,
    pattern = 'none',
    width = 'standard',
  } = props;
  const { palette } = useTheme();

  const backgroundColor =
    theme === 'dark'
      ? sendTheme.dark.backgroundColor
      : palette.background.paper;

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
          <EditorialContent {...{ eyelet, body, title, theme }} />
          <EditorialCtas {...{ ctaButtons, theme }} />
        </Stack>
      </Grid>
      <Grid item md={columns[width]} sx={styles.half}>
        <EditorialImage {...{ pattern, image, theme }} />
      </Grid>
    </EContainer>
  );
};

const styles = {
  half: {
    display: 'grid',
    justifyContent: 'center',
  },
};
