import React, { useEffect, useRef, useState } from 'react';
import EContainer from '../EContainer';
import { type CommonProps } from '../../types/components';
import { Kpi, type KpiProps } from '../Kpi';
import { StatsContent, type StatsContentProps } from './StatsContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './Stats.css';

export interface StatsProps extends CommonProps, StatsContentProps {
  kpiValues: Array<KpiProps & { id: string | number }>;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  kpiCaption?: string;
}

export const Stats = ({
  kpiValues,
  theme,
  eyelet,
  title,
  body,
  kpiCaption,
  direction = 'column',
}: StatsProps) => {
  const backgroundColor =
    theme === 'dark' ? 'primary.dark' : 'background.paper';
  const textColor = theme === 'dark' ? 'background.paper' : 'text.primary';
  const [active, setActive] = useState<string | null>(null);

  const onIntersectionObserved: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  };

  const slider = useRef(null);

  useEffect(() => {
    // create an observer setting in the state the current visible card id
    const observer = new IntersectionObserver(onIntersectionObserved, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    const items = Array.from(document.querySelectorAll('.kpi-slide'));

    // observe each slider item
    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const scrollIntoView = (kpi: KpiProps & { id: string | number }) => {
    const selected = document.querySelector(`#kpi-${kpi.id}`);
    // scroll only in horizontal
    selected?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const styles = useStyles({ direction });

  return (
    <EContainer background={backgroundColor}>
      <Stack sx={styles.main}>
        <StatsContent
          {...{ theme, eyelet, title, body }}
          sx={styles.statsContent}
        />
        <Stack className="no-scrollbar" sx={styles.kpiContainer}>
          {kpiCaption && (
            <Box sx={styles.kpiTitleContainer}>
              <Typography
                color={textColor}
                variant="sidenav"
                position="absolute"
              >
                {kpiCaption}
              </Typography>
            </Box>
          )}
          <Stack ref={slider} sx={styles.kpiSlideContainer}>
            {kpiValues.map((kpi, index) => (
              <React.Fragment key={kpi?.id ?? index}>
                <Kpi
                  {...kpi}
                  theme={theme}
                  id={`kpi-${kpi.id}`}
                  className={`kpi-slide`}
                />
              </React.Fragment>
            ))}
          </Stack>
          {/* Only on xs resolutions with row direction */}
          <Stack sx={styles.kpiStepper}>
            <Stack position="absolute" direction="row" gap={1}>
              {kpiValues.map((kpi, index) => (
                <Box
                  key={`slider-${kpi.id}`}
                  onClick={() => {
                    scrollIntoView(kpi);
                  }}
                  sx={{
                    ...styles.kpiStepCircle,
                    backgroundColor:
                      active === `kpi-${kpi.id}` || (!active && index === 0)
                        ? 'primary.main'
                        : '#CCD4DC',
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </EContainer>
  );
};

const useStyles = ({ direction = 'column' }: Partial<StatsProps>) => {
  const isVertical = direction?.split('-').includes('column');

  const sx = {
    main: {
      flexDirection: {
        sm: direction,
        xs: direction.replace('row', 'column') as 'column' | 'column-reverse',
      },
      alignItems: 'center',
      justifyContent: {
        sm: isVertical ? 'center' : 'space-between',
        xs: 'center',
      },
      textAlign: { sm: isVertical ? 'center' : 'left', xs: 'center' },
      gap: { md: isVertical ? 4 : 17, xs: 4 },
      padding: 4,
      width: '100%',
    },
    statsContent: {
      width: { sm: isVertical ? '100%' : '40%', xs: '100%' },
    },
    kpiContainer: {
      width: {
        sm: isVertical ? '100%' : '60%',
        xs: '100%',
      },
      overflowX: { xs: 'scroll', sm: 'visible' },
    },
    kpiTitleContainer: {
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    kpiSlideContainer: {
      display: 'flex',
      flexDirection: { sm: 'row', xs: isVertical ? 'column' : 'row' },
      justifyContent: 'center',
      gap: 2,
      paddingBottom: { xs: isVertical ? 0 : 3 },
      padding: { xs: 2, sm: 0 },
      width: { xs: isVertical ? '100%' : '200%', sm: '100%' },
    },
    kpiStepper: {
      alignSelf: 'center',
      justifyContent: 'center',
      display: { sm: 'hidden', xs: isVertical ? 'hidden' : 'flex' },
      visibility: { sm: 'hidden', xs: isVertical ? 'hidden' : 'visible' },
      paddingBottom: 1,
    },
    kpiStepCircle: {
      textDecoration: 'none',
      height: 10,
      width: 10,
      borderRadius: 100,
    },
  };

  return sx;
};
