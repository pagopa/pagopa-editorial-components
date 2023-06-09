import {
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  Link,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { type CommonProps, type Generic } from '../../types/components';
import EContainer from '../EContainer';
import { EIcon, type EIconProps } from '../EIcon';

import { isJSX } from '../../utils';
import { Masonry } from '@mui/lab';

const layoutMap = new Map();

layoutMap.set('3-items', 3);
layoutMap.set('4-items', 4);
layoutMap.set('full-text', 2);

interface IItem {
  textAlign: 'center' | 'left';
  icon?: Generic | EIconProps['name'];
  label?: string;
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
    title: string;
  };
}

const Item = (props: IItem) => {
  const { title, text, icon, link, textAlign, label } = props;
  return (
    <Card elevation={16}>
      <CardContent>
        {isJSX(icon) ? icon : <EIcon name={icon} />}
        {label && (
          <Typography textAlign={textAlign} mb={1}>
            {label}
          </Typography>
        )}
        <Typography variant="h6" textAlign={textAlign} mb={1}>
          {title}
        </Typography>
        <Typography variant="body1" textAlign={textAlign} mb={1}>
          {text}
        </Typography>
        {link && (
          <Stack
            mt={2}
            direction="row"
            alignItems="center"
            color="primary.main"
            justifyContent={textAlign}
          >
            <Link
              color="primary.main"
              underline="none"
              textTransform="capitalize"
              href={link.href}
              title={link.title}
              fontSize={14}
              fontWeight={400}
            >
              {link.text}
            </Link>
            <ArrowRightAltIcon sx={{ color: 'inerith', fontSize: 18 }} />
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export interface CardsProps extends CommonProps {
  items: IItem[];
  layout: '3-items' | '4-items' | 'full-text';
  text: {
    title: string;
    subtitle?: string;
    body?: string;
  };
}

const Cards = (props: CardsProps) => {
  const { items, layout, theme, text } = props;
  const background = theme === 'dark' ? 'primary.dark' : 'background.paper';
  return (
    <EContainer background={background} py={8}>
      <Grid container spacing="145px">
        {layout === 'full-text' && (
          <Grid item md={4}>
            <Typography variant="h2" mb={5}>
              {text.title}
            </Typography>
            <Typography variant="h6" mb={5}>
              {text.subtitle}
            </Typography>
            <Typography variant="body1">{text.body}</Typography>
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
