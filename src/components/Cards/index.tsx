import { Button, Grid, Stack, Typography } from '@mui/material';
import { type Generic, type CommonProps } from '../../types/components';
import EContainer from '../EContainer';
import Item, { type IItem } from './item';
import { isJSX } from '../../utils';
import { type ReactNode } from 'react';
import { type CtaButton } from 'components/Ctas';

export interface CardsProps extends CommonProps {
  items: IItem[];
  text: {
    title: string;
    subtitle?: string;
    body?: string | Generic;
  };
  ctaButtons?: CtaButton[];
}

const ItemsContainer = ({
  masonry,
  children,
}: {
  masonry: boolean;
  children: ReactNode[];
}) => {
  return masonry ? (
    <Stack
      sx={{
        display: 'flex',
        flexFlow: 'column wrap',
        maxHeight: { sm: '1000px' },
        maxWidth: '50%',
        gap: '20px',
      }}
    >
      {children}
    </Stack>
  ) : (
    <Grid container justifyContent="center" gap={2.5}>
      {children}
    </Grid>
  );
};

const Cards = ({ items, theme, text, ctaButtons }: CardsProps) => {
  const background = theme === 'dark' ? 'primary.dark' : 'background.paper';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';

  const isMasonry = !!text?.body && !!text?.subtitle;

  return (
    <EContainer
      background={background}
      py={8}
      sx={{
        display: 'flex',
        flexDirection: { md: 'row' },
        width: '100%',
        gap: { md: isMasonry ? '145px' : 0 },
      }}
    >
      <Typography
        color={textColor}
        sx={{
          width: { md: isMasonry ? '30%' : '100%', xs: '100%' },
          textAlign: isMasonry ? 'left' : 'center',
        }}
        component="div"
      >
        <Typography variant="h2" mb={5} color={'inherit'}>
          {text.title}
        </Typography>

        {isMasonry && (
          <Typography variant="h6" mb={5} color={'inherit'}>
            {text.subtitle}
          </Typography>
        )}
        {isMasonry ? (
          isJSX(text.body) ? (
            text.body
          ) : (
            <Typography variant="body1" color={'inherit'}>
              {text.body}
            </Typography>
          )
        ) : null}
        {ctaButtons?.length ? (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            mb={{ xs: 8, lg: 0 }}
          >
            {ctaButtons.map((button, i) => {
              if (isJSX(button)) return button;
              return (
                <Button key={`${button.text}-${i}`} {...button}>
                  {button.text}
                </Button>
              );
            })}
          </Stack>
        ) : null}
      </Typography>
      <ItemsContainer masonry={isMasonry}>
        {items.map((item, i) => (
          <Item
            key={`${item.title}-${i}`}
            {...item}
            textAlign={isMasonry ? 'left' : 'center'}
            masonry={isMasonry}
          />
        ))}
      </ItemsContainer>
    </EContainer>
  );
};

export default Cards;
