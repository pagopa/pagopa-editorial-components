import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { type CommonProps } from 'types/components';
import {
  Content as EditorialContent,
  type EditorialContentProps,
} from './Content';
import {
  Ctas as EditorialCtas,
  type EditorialCtaProps,
  type StoreButtonsProps,
} from './Ctas';
import { Image as EditorialImage, type EditorialImageProps } from './Image';
import EContainer from '../EContainer';
import { useEffect, useState } from 'react';

export interface EditorialProps
  extends CommonProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  reversed?: boolean;
  width: 'wide' | 'standard' | 'center';
  storeButtons?: StoreButtonsProps;
}

export const Editorial = (props: EditorialProps) => {
  const {
    image,
    eyelet,
    title,
    body,
    theme,
    ctaButtons,
    storeButtons,
    pattern = 'none',
    width = 'standard',
    reversed = false,
  } = props;
  const { palette } = useTheme();

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
      );
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else {
      // Return a no-op function when window is not defined
      return () => {};
    }
  }, []);

  const backgroundColor =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;

  const columns = {
    wide: 6,
    standard: 5,
    center: 4,
  };

  const containerDirection = isMobile
    ? reversed
      ? 'column-reverse'
      : 'column'
    : reversed
    ? 'row-reverse'
    : 'row';

  const gridItemStyles =
    width === 'standard' ? { ...styles.half, ...styles.offset } : styles.half;

  return (
    <EContainer
      alignItems="center"
      background={backgroundColor}
      direction={containerDirection}
      py={8}
      spacing={2}
    >
      <Grid item md={columns[width]} sx={gridItemStyles}>
        <Stack gap={4}>
          <EditorialContent {...{ eyelet, body, title, theme }} />
          <EditorialCtas {...{ ctaButtons, storeButtons, theme }} />
        </Stack>
      </Grid>
      <Grid item md={columns[width]}>
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
  offset: {
    marginLeft: '8.33%',
    paddingRight: '4.15%',
  },
};
