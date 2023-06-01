import { type CommonProps } from 'types/components';
import EContainer from '../EContainer';
import { Button, Typography, Divider, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface DownloadItem {
  label: string;
  fileName?: string;
  href: string;
}

export interface IDownolad extends CommonProps {
  title: string;
  subtitle?: string;
  type?: 'button' | 'link';
  items: DownloadItem[];
}

const Download = (props: IDownolad) => {
  const { title, subtitle, items, theme, type } = props;
  const backgroundColor = theme === 'dark' ? 'primary.dark' : 'primary.paper';
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
      <Stack alignItems={'flex-start'}>
        {items.map((item, index) => (
          <Button
            key={`${item.label}-${index}`}
            href={item.href}
            variant={isTypeButton ? 'outlined' : 'text'}
            startIcon={<DownloadIcon />}
            color={theme === 'dark' ? 'negative' : 'primary'}
            download={item.fileName ?? item.label}
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
