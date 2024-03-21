import { Button, Grid, Stack, Typography } from '@mui/material';
import { type Generic, type CommonProps } from '../../types/components';
import EContainer from '../EContainer';
import Item, { type IItem } from './item';
import { isJSX } from '../../utils';
import { type ReactNode } from 'react';
import { type CtaButton } from '../Ctas';
import './default.css';

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
        gap: '20px',
        alignItems: 'center',
      }}
      className="cardsStack"
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

  const isMasonry = true;

  return (
    <EContainer
      background={background}
      py={8}
      sx={{
        display: 'flex',
        flexDirection: { md: 'row' },
        width: '100%',
        gap: { md: isMasonry ? '60px' : 0 },
        justifyContent: 'center',
      }}
    >
      <Typography
        color={textColor}
        sx={{
          width: { md: isMasonry ? '30%' : '100%', xs: '100%' },
          textAlign: isMasonry ? 'left' : 'center',
        }}
        component={'div'}
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
      <div className="cardsContainer">
        <ItemsContainer masonry={isMasonry}>
          {items.slice(0, Math.ceil(items.length / 2)).map((item, i) => (
            <Item
              key={`${item.title}-${i}`}
              {...item}
              textAlign={isMasonry ? 'left' : 'center'}
              masonry={isMasonry}
            />
          ))}
        </ItemsContainer>
        <ItemsContainer masonry={isMasonry}>
          {items.slice(Math.ceil(items.length / 2)).map((item, i) => (
            <Item
              key={`${item.title}-${i}`}
              {...item}
              textAlign={isMasonry ? 'left' : 'center'}
              masonry={isMasonry}
            />
          ))}
        </ItemsContainer>
      </div>
    </EContainer>
  );
};

export default Cards;
