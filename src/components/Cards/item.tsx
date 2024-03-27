import { Card, CardContent, Typography, Stack, Link, Box } from '@mui/material';
import { EIcon, type EIconProps } from '../EIcon';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export interface IItem {
  textAlign?: 'center' | 'left';
  cardIcon?: EIconProps;
  label?: string;
  title: string;
  text?: string;
  links?: Array<{
    href: string;
    text: string;
    title?: string;
  }>;
  masonry?: boolean;
  width: string;
}

const Item = ({
  title,
  text,
  cardIcon,
  links,
  textAlign,
  label,
  masonry,
}: IItem) => {
  return (
    <Card
      elevation={16}
      sx={{
        display: 'flex',
        minHeight: '100px',
        width: 'auto',
        flex: { md: masonry ? '0 0 auto' : '1 1 0' },
        borderRadius: '16px',
      }}
    >
      <CardContent>
        <Stack px={4} justifyContent="flex-start" alignItems={textAlign}>
          <Box mb={2} color="primary.dark">
            <EIcon icon={cardIcon?.icon} fontSize="large" />
          </Box>
          {label && (
            <Typography
              mb={1}
              textTransform="uppercase"
              fontSize="12px"
              fontWeight="600"
              color="text.secondary"
            >
              {label}
            </Typography>
          )}
          <Typography variant="h5" mb={1}>
            {title}
          </Typography>
          <Typography variant="body2" mb={1} textAlign={{ textAlign }}>
            {text}
          </Typography>
          {links?.length
            ? links.map((link, index) => (
                <Stack
                  key={index}
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
              ))
            : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Item;
