import { Typography } from '@mui/material';
import EContainer from '../EContainer';

export interface TextPros {
  title?: string;
  subtitle?: string;
  text?: string;
  textAlign?: 'center' | 'left';
}

const Text = (props: TextPros) => {
  const { title, subtitle, text, textAlign = 'left' } = props;
  return (
    <EContainer background="background.paper" py={16}>
      {title && (
        <Typography variant="h3" mb={2} textAlign={textAlign} width={'100%'}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="h6" mb={2} textAlign={textAlign} width={'100%'}>
          {subtitle}
        </Typography>
      )}
      {text && (
        <Typography variant="body2" textAlign={textAlign} width={'100%'}>
          {text}
        </Typography>
      )}
    </EContainer>
  );
};

export default Text;
