import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography } from '@mui/material';
import { type Generic } from 'types/components';

interface QuoteTextProps {
  textColor: string;
  subtitle?: string | Generic;
}
const QuoteText = ({ textColor, subtitle }: QuoteTextProps) => {
  return (
    <>
      <FormatQuoteIcon
        sx={{ flex: '0 1 auto', alignSelf: 'flex-start' }}
        fontSize="large"
        color="inherit"
      ></FormatQuoteIcon>
      <Typography
        sx={{ flex: '0 1 auto', alignSelf: 'center' }}
        variant="h5"
        color={textColor}
      >
        {subtitle}
      </Typography>
      <FormatQuoteIcon
        sx={{ flex: '0 1 auto', alignSelf: 'flex-end' }}
        fontSize="large"
        color="inherit"
      ></FormatQuoteIcon>
    </>
  );
};

export default QuoteText;
