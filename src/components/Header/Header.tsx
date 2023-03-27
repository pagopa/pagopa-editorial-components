import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { type CommonProps } from 'types/components';
import { type SxProps, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Ctas, type CtaProps } from '../Ctas';
import { UpperHeader, type UpperHeaderProps } from './UpperHeader';
import { MenuDropdown, type MenuDropdownProp } from './MenuDropdown';

interface BottomHeaderProps extends CtaProps {
  menu: MenuDropdownProp[];
}

export interface HeaderProps
  extends CommonProps,
    UpperHeaderProps,
    BottomHeaderProps {}

const BottomHeader = ({ menu, ctaButtons, theme }: BottomHeaderProps) => {
  return (
    <Stack sx={styles.bottomHeader}>
      <Stack gap={{ md: 4, xs: 2 }} direction={{ md: 'row', xs: 'column' }}>
        {menu.map((menu, index) => (
          <MenuDropdown key={index} {...menu} theme={theme}>
            {menu.children}
          </MenuDropdown>
        ))}
      </Stack>
      {ctaButtons?.length && <Ctas theme={theme} ctaButtons={ctaButtons} />}
    </Stack>
  );
};

export const Header = ({
  product,
  help,
  theme,
  menu,
  onHelpClick,
  ctaButtons,
  avatar,
  beta,
}: HeaderProps) => {
  const { palette, spacing } = useTheme();
  const backgroundColor =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;

  return (
    <Box bgcolor={backgroundColor} paddingX={spacing(3)} gap={spacing(2)}>
      <UpperHeader {...{ product, help, onHelpClick, avatar, beta, theme }} />
      <Divider />
      <BottomHeader {...{ menu, ctaButtons, theme }} />
    </Box>
  );
};

const styles: Record<string, SxProps> = {
  bottomHeader: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { md: 'center', xs: 'flex-start' },
    gap: { xs: 2 },
    paddingBottom: { xs: 2 },
  },
};
