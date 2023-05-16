import Stack from '@mui/material/Stack/Stack';
import { type CtaProps, Ctas } from '../Ctas';

export type PreHeaderProps =
  | {
      rightCtas: CtaProps;
      leftCtas: CtaProps;
    }
  | {
      rightCtas: CtaProps;
      leftCtas?: CtaProps;
    }
  | {
      rightCtas?: CtaProps;
      leftCtas: CtaProps;
    };

export const PreHeader = ({ leftCtas, rightCtas }: PreHeaderProps) => (
  <Stack
    display="flex"
    flexDirection="row"
    bgcolor="background.paper"
    paddingY={2}
    paddingX={{ xs: 2, sm: 4 }}
    justifyContent="space-between"
    flexWrap="wrap"
  >
    {leftCtas && <Ctas {...leftCtas} />}
    {rightCtas && <Ctas reverse {...rightCtas} />}
  </Stack>
);
