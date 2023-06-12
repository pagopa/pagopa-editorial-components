import { Grid, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
import { type Generic, type CommonProps } from '../../types/components';
import EContainer from '../EContainer';
import Item, { type IItem } from './item';
import { isJSX } from '../../utils';

const layoutMap = new Map();

layoutMap.set('3-items', 3);
layoutMap.set('4-items', 4);
layoutMap.set('full-text', 2);

export interface CardsProps extends CommonProps {
  items: IItem[];
  layout: '3-items' | '4-items' | 'full-text';
  text: {
    title: string;
    subtitle?: string;
    body?: string | Generic;
  };
}

const Cards = (props: CardsProps) => {
  const { items, layout, theme, text } = props;
  const background = theme === 'dark' ? 'primary.dark' : 'background.paper';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';
  return (
    <EContainer background={background} py={8}>
      <Grid container spacing="145px">
        {layout === 'full-text' && (
          <Grid item md={4} color={textColor}>
            <Typography variant="h2" mb={5} color={'inherit'}>
              {text.title}
            </Typography>
            <Typography variant="h6" mb={5} color={'inherit'}>
              {text.subtitle}
            </Typography>
            {isJSX(text.body) ? (
              text.body
            ) : (
              <Typography variant="body1" color={'inherit'}>
                {text.body}
              </Typography>
            )}
          </Grid>
        )}
        <Grid item md={layout !== 'full-text' ? 12 : 8}>
          <Masonry columns={layoutMap.get(layout)} spacing={4}>
            {items.map((item, i) => (
              <Item
                key={`${item.title}-${i}`}
                {...item}
                textAlign={layout !== 'full-text' ? 'center' : 'left'}
              />
            ))}
          </Masonry>
        </Grid>
      </Grid>
    </EContainer>
  );
};

export default Cards;
