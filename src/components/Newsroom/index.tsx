import EContainer from '../EContainer';
import { Typography, Grid, Link, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface INewsroomItem {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  date: {
    date: Date;
    locale?: string;
    options?: Intl.DateTimeFormatOptions;
  };
  href: {
    label: string;
    title?: string;
    link: string;
  };
}

export interface INewsroom {
  items: INewsroomItem[];
}

const Item = (props: INewsroomItem) => {
  const {
    img: { src, alt },
    date: {
      date,
      locale = 'it-IT',
      options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    },
    title,
    href,
  } = props;
  return (
    <Grid item md={4} mb={8}>
      <img src={src} alt={alt} width="100%" />
      <Typography color="text.secondary" fontSize={16} fontWeight={400} my={2}>
        {new Intl.DateTimeFormat(locale, options).format(date)}
      </Typography>
      <Typography variant="h6">{title}</Typography>
      <Stack mt={2} direction="row" alignItems="center" color="primary.main">
        <Link
          color="primary.main"
          underline="none"
          textTransform="capitalize"
          href={href.link}
          title={href.title}
          fontSize={14}
          fontWeight={400}
        >
          {href.label}
        </Link>
        <ArrowRightAltIcon sx={{ color: 'inerith', fontSize: 18 }} />
      </Stack>
    </Grid>
  );
};

const Newsroom = (props: INewsroom) => {
  const { items } = props;
  return (
    <EContainer background="background.paper" py={16}>
      <Grid item md={3} />
      <Grid item md={9}>
        <Grid container spacing={3}>
          {items.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </Grid>
      </Grid>
    </EContainer>
  );
};

export default Newsroom;
