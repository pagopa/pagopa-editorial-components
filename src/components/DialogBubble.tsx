import { Stack, type StackProps, useTheme, type Theme } from '@mui/material';
import { type ReactNode } from 'react';

interface DialogBubbleProps extends StackProps {
  children: ReactNode;
}

export const DialogBubble = ({
  children,
  ...stackProps
}: DialogBubbleProps) => {
  const mui = useTheme();
  const styles = useStyles(mui);
  const white = mui.palette.common.white;
  return (
    <Stack
      sx={{ ...styles.bubbleContainer, bgcolor: white }}
      aria-haspopup="true"
    >
      <Stack sx={styles.bubble} {...stackProps}>
        {children}
      </Stack>
    </Stack>
  );
};

const useStyles = (mui: Theme) => ({
  bubbleContainer: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    marginTop: '42px',
    padding: mui.spacing(2),
    direction: 'rtl',
    textAlign: 'left',
    borderRadius: '4px',
  },
  bubble: { transform: 'rotate(180deg)' },
});
