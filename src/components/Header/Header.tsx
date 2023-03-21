import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { type CommonProps } from 'types/components';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Ctas, type CtaProps } from '../Ctas';
import { UpperHeader, type UpperHeaderProps } from './UpperHeader';
import { MenuDropdown, type MenuDropdownProp } from './MenuDropdown';

export interface HeaderProps extends CommonProps, UpperHeaderProps, CtaProps {
  menu: MenuDropdownProp[];
}

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
      <UpperHeader {...{ product, help, onHelpClick, avatar, beta }} />
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Stack gap="32px" direction="row">
          {menu.map((menu, index) => (
            <MenuDropdown key={index} {...menu}>
              {menu.children}
            </MenuDropdown>
          ))}
        </Stack>
        {ctaButtons?.length && <Ctas theme="light" ctaButtons={ctaButtons} />}
      </Stack>
    </Box>
  );
};
