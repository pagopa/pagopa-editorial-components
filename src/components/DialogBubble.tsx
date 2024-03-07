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
  return (
    <Stack sx={styles.bubbleContainer} aria-haspopup="true">
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
    backgroundColor: '#ffffff',
    marginTop: '42px',
    padding: mui.spacing(2),
    direction: 'rtl',
    textAlign: 'left',
    boxShadow: '-6px -6px 19px 2px #002B551A',
    borderRadius: '4px',
  },
  bubble: { transform: 'rotate(180deg)' },
});
