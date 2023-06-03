import React, { useEffect, useRef, useState } from 'react';
import EContainer from '../EContainer';
import { type CommonProps } from '../../types/components';
import { Kpi, type KpiProps } from '../Kpi';
import { StatsContent, type StatsContentProps } from './StatsContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  const isVertical = direction.split('-').includes('column');
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

  const onSliderDotClick = (kpi: KpiProps & { id: string | number }) => {
    const selected = document.querySelector(`#kpi-${kpi.id}`);
    // scroll only in horizontal
    selected?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    setActive(`kpi-${kpi.id}`);
  };

  return (
    <EContainer background={backgroundColor}>
      <Stack
        direction={{
          sm: direction,
          xs: direction.replace('row', 'column') as 'column' | 'column-reverse',
        }}
        alignItems="center"
        justifyContent={{
          sm: isVertical ? 'center' : 'space-between',
          xs: 'center',
        }}
        textAlign={{ sm: isVertical ? 'center' : 'left', xs: 'center' }}
        gap={{ md: isVertical ? 4 : 17, xs: 4 }}
        padding={4}
        width="100%"
      >
        <StatsContent
          {...{ theme, eyelet, title, body }}
          width={{ sm: isVertical ? '100%' : '40%', xs: '100%' }}
        />
        <Stack
          width={{
            sm: isVertical ? '100%' : '60%',
            xs: '100%',
          }}
          sx={{
            overflowX: { xs: 'scroll', sm: 'visible' },
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {kpiCaption && (
            <Box
              height={40}
              display="flex"
              justifyContent="center"
              width="100%"
            >
              <Typography
                color={textColor}
                variant="sidenav"
                position="absolute"
              >
                {kpiCaption}
              </Typography>
            </Box>
          )}
          <Stack
            direction={{ sm: 'row', xs: isVertical ? 'column' : 'row' }}
            gap={2}
            paddingBottom={{ xs: isVertical ? 0 : 3 }}
            paddingX={{ xs: isVertical ? 0 : 2 }}
            ref={slider}
            width={{ xs: isVertical ? '100%' : '200%', sm: '100%' }}
          >
            {kpiValues.map((kpi, index) => (
              <React.Fragment key={kpi?.id ?? index}>
                <Kpi
                  {...kpi}
                  id={`kpi-${kpi.id}`}
                  className={`kpi-slide ${kpi?.className ? kpi.className : ''}`}
                  theme={theme}
                />
              </React.Fragment>
            ))}
          </Stack>
          <Stack
            justifyContent="center"
            flexDirection="row"
            display={{ sm: 'hidden', xs: isVertical ? 'hidden' : 'flex' }}
            visibility={{ sm: 'hidden', xs: isVertical ? 'hidden' : 'visible' }}
          >
            <Stack sx={{ position: 'absolute', flexDirection: 'row', gap: 1 }}>
              {kpiValues.map((kpi, index) => (
                <Box
                  key={`slider-${kpi.id}`}
                  onClick={() => {
                    onSliderDotClick(kpi);
                  }}
                  sx={{
                    textDecoration: 'none',
                    height: 10,
                    width: 10,
                    backgroundColor:
                      active === `kpi-${kpi.id}` || (!active && index === 0)
                        ? 'primary.main'
                        : '#CCD4DC',
                    borderRadius: 100,
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
