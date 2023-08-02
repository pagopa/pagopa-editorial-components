import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { AccordionItem, type AccordionItemProps } from './AccordionItem';
export interface AccordionProps {
  title: string;
  subtitle?: string;
  description?: string | JSX.Element;
  accordionItems: AccordionItemProps[];
  theme: 'light' | 'dark';

  layout?: 'left' | 'center' | 'right';
}

export const Accordion = (props: AccordionProps) => {
  const {
    title,
    subtitle,
    description,
    accordionItems,
    theme,
    layout = 'left',
  } = props;
  const isDarkTheme = theme === 'dark';
  const bgcolor = isDarkTheme ? 'primary.main' : '#FAFAFA';
  const textColor = isDarkTheme ? 'white' : 'text.primary';

  const isCenterLayout = layout === 'center';
  const textAlignment = isCenterLayout ? 'center' : 'left';

  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} bgcolor={bgcolor} component="section">
      <Container>
        <Grid spacing={{ xs: 5, md: isCenterLayout ? 7 : 16 }} container>
          <Grid item xs={12} md={isCenterLayout ? 12 : 4}>
            <Stack px={{ xs: 1, md: 0 }} spacing={{ xs: 2, md: 5 }}>
              {/** Title */}
              {title && (
                <Typography
                  textAlign={textAlignment}
                  color={textColor}
                  variant="h4"
                >
                  {title}
                </Typography>
              )}

              {/** Subtitle */}
              {subtitle && (
                <>
                  <Typography
                    textAlign={textAlignment}
                    color={textColor}
                    variant="h6"
                  >
                    {subtitle}
                  </Typography>
                </>
              )}

              {/** Description */}
              {description && (
                <>
                  {typeof description === 'string' ? (
                    <Typography
                      textAlign={textAlignment}
                      color={textColor}
                      variant="body2"
                    >
                      {description}
                    </Typography>
                  ) : (
                    <Box textAlign={textAlignment} color={textColor}>
                      {description}
                    </Box>
                  )}
                </>
              )}
            </Stack>
          </Grid>
          <Grid
            item
            order={layout === 'right' ? -1 : 1}
            xs={12}
            md={isCenterLayout ? 12 : 8}
          >
            {/** Accordions */}
            <Stack spacing={2}>
              {accordionItems.map((accordionItem, i) => (
                <AccordionItem key={i} {...accordionItem} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
