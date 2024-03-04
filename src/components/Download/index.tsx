import { type CommonProps } from 'types/components';
import EContainer from '../EContainer';
import { Button, Typography, Divider, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { sendTheme } from '../../types/SendTheme';

interface IDownloadItem {
  label: string;
  fileName?: string;
  href: string;
}

export interface IDownload extends CommonProps {
  title: string;
  subtitle?: string;
  type?: 'button' | 'link';
  items: IDownloadItem[];
  itemsAlignment?: 'center' | 'left' | 'right';
}

const alignMap = new Map();
alignMap.set('left', 'flex-start');
alignMap.set('center', 'center');
alignMap.set('right', 'flex-end');

const Download = (props: IDownload) => {
  const {
    title,
    subtitle,
    items,
    theme,
    type,
    itemsAlignment = 'left',
  } = props;
  const backgroundColor =
    theme === 'dark' ? sendTheme.dark.backgroundColor : 'background.paper';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';
  const isTypeButton = type === 'button';
  return (
    <EContainer direction="column" background={backgroundColor} py={10}>
      <Typography variant="h2" mb={1} color={textColor}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" mb={1} color={textColor}>
          {subtitle}
        </Typography>
      )}
      <Divider />
      <Stack alignItems={alignMap.get(itemsAlignment)}>
        {items.map((item, index) => (
          <Button
            key={`${item.label}-${index}`}
            href={item.href}
            variant={isTypeButton ? 'outlined' : 'text'}
            startIcon={<DownloadIcon />}
            color={theme === 'dark' ? 'negative' : 'primary'}
            download={item.fileName ?? ''}
            sx={{
              marginTop: isTypeButton ? '32px' : '8px',
              paddingLeft: isTypeButton ? 'inherith' : '6px',
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </EContainer>
  );
};

export default Download;
