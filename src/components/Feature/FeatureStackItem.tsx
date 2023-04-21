/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from '@mui/material';
import Subtitle from './Subtitle';
import type { FeatureItem } from './Feature';

interface FeatureStackItemProps {
  item: FeatureItem;
  theme: 'dark' | 'light';
}

export const FeatureStackItem: React.FC<FeatureStackItemProps> = ({
  item,
  theme,
}) => {
  const themeStyle = theme === 'light' ? 'text.primary' : 'background.paper';

  return (
    <Stack
      alignContent="center"
      justifyContent="flex-start"
      spacing={{ xs: 1, md: 3 }}
      sx={{
        flex: 1,
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <Box
        mx="auto"
        sx={{
          svg: {
            height: '64px',
            width: '64px',
          },
        }}
        color={themeStyle}
      >
        {item.icon}
      </Box>
      <Stack spacing={1} textAlign="center">
        <Typography color={themeStyle} variant="h6">
          {item.title}
        </Typography>
        <>
          {!item.link ? (
            <Typography variant="body2" color={themeStyle}>
              {item.subtitle}
            </Typography>
          ) : (
            <Subtitle
              theme={theme}
              subtitle={item.subtitle}
              textLink={item.link.text}
              url={item.link.url}
            />
          )}
        </>
      </Stack>
    </Stack>
  );
};
