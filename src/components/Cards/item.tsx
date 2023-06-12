import {
  Card,
  CardContent,
  Typography,
  Stack,
  Link,
  Box,
  Grid,
} from '@mui/material';
import { type Generic } from '../../types/components';
import { EIcon, type EIconProps } from '../EIcon';
import { isJSX } from '../../utils';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const layoutItemMap = new Map();

layoutItemMap.set('3-items', 4);
layoutItemMap.set('4-items', 3);
layoutItemMap.set('full-text', undefined);

export interface IItem {
  textAlign?: 'center' | 'left';
  icon?: Generic | EIconProps['name'];
  label?: string;
  title: string;
  text: string;
  link?: {
    href: string;
    text: string;
    title: string;
  };
  layout: '3-items' | '4-items' | 'full-text';
}

const Item = (props: IItem) => {
  const { title, text, icon, link, textAlign, label, layout } = props;
  return (
    <Grid item md={layoutItemMap.get(layout)}>
      <Card elevation={16}>
        <CardContent>
          <Stack
            px={4}
            sx={{ minHeight: '275px' }}
            justifyContent="center"
            alignItems={textAlign}
          >
            <Box mb={2} color="primary.dark">
              {isJSX(icon) ? (
                icon
              ) : (
                <EIcon name={icon} sx={{ fontSize: 40, color: 'inerith' }} />
              )}
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
            <Typography variant="h6" mb={1}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              mb={1}
              textAlign={{ textAlign }}
              fontSize="16px"
            >
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
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Item;
