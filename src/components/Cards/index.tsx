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

const layoutMap = new Map();

layoutMap.set('3-items', 4);
layoutMap.set('4-items', 3);
layoutMap.set('full-text', 6);

interface IItem {
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
  const { title, text, icon, link } = props;
  return (
    <Card elevation={16}>
      <CardContent>
        {isJSX(icon) ? icon : <EIcon name={icon} />}
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{text} </Typography>
        {link && (
          <Stack
            mt={2}
            direction="row"
            alignItems="center"
            color="primary.main"
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
  const { items, layout } = props;
  return (
    <EContainer background="background.paper" py={8}>
      <Grid container spacing={2}>
        {items.map((item, i) => (
          <Grid item key={`${item.title}-${i}`} md={layoutMap.get(layout)}>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </EContainer>
  );
};

export default Cards;
