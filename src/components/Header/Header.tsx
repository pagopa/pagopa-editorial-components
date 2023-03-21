import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Fab from '@mui/material/Fab';
import { type CommonProps } from 'types/components';
import { type SxProps, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type MouseEventHandler, useState } from 'react';
import { type StackProps } from '@mui/system';
import { Ctas, type CtaProps } from '../Ctas';
import Avatar, { type AvatarProps } from '@mui/material/Avatar';

interface UpperHeaderProps {
  product: string;
  help?: boolean;
  onHelpClick: () => void;
  avatar?: AvatarProps;
}

export interface HeaderProps extends CommonProps, UpperHeaderProps, CtaProps {
  menu: MenuDropdownProp[];
}

interface MenuDropdownProp extends Partial<StackProps> {
  label: string;
  children?: JSX.Element[];
  active?: boolean;
}

const MenuDropdown = ({
  label,
  children,
  active,
  onClick,
  ...button
}: MenuDropdownProp) => {
  const [menuOpen, setMenuOpen] = useState(false); // TODO use a reducer
  const hasChildren = children?.length;
  const style = {
    ...styles.MenuDropdown,
    ...(active && styles.active),
  };

  const toggleMenu = () => {
    hasChildren && setMenuOpen((open) => !open);
  };

  const handleMenuClick: MouseEventHandler<HTMLDivElement> = (e) => {
    toggleMenu();
    onClick?.(e);
  };

  return (
    <Stack sx={style}>
      <Stack onClick={handleMenuClick} sx={styles.menuItem} {...button}>
        <Typography variant="sidenav" color="primary">
          {label}
        </Typography>
        {hasChildren && (
          <ArrowDropDownIcon
            color="primary"
            fontSize="small"
            sx={menuOpen ? styles.menuIconOpen : styles.menuIconClosed}
          />
        )}
      </Stack>
      {menuOpen ? <Stack sx={styles.menu}>{children}</Stack> : null}
    </Stack>
  );
};

const UpperHeader = ({
  product,
  help,
  onHelpClick,
  avatar,
}: UpperHeaderProps) => (
  <Stack direction="row" sx={styles.top}>
    <Stack direction="row" gap="16px">
      {avatar && <Avatar {...avatar} />}
      <Typography variant="h5">{product}</Typography>
    </Stack>
    {help && (
      <Stack direction="row" alignItems="center" gap="16px">
        <Typography variant="subtitle2" color="primary">
          Serve aiuto?
        </Typography>
        <Fab
          color="primary"
          sx={{ width: '44px', height: '44px' }}
          onClick={onHelpClick}
        >
          <ChatBubbleOutlineIcon sx={{ width: '16.67px', height: '16.67px' }} />
        </Fab>
      </Stack>
    )}
  </Stack>
);

export const Header = ({
  product,
  help,
  theme,
  menu,
  onHelpClick,
  ctaButtons,
  avatar,
}: HeaderProps) => {
  const { palette, spacing } = useTheme();
  const backgroundColor =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;

  return (
    <Box bgcolor={backgroundColor} paddingX={spacing(3)} gap={spacing(2)}>
      <UpperHeader {...{ product, help, onHelpClick, avatar }} />
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

const styles: Record<string, SxProps> = {
  top: {
    paddingY: '18px',
    justifyContent: 'space-between',
  },
  active: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    borderBottomColor: 'primary.main',
  },
  MenuDropdown: {
    paddingY: '16px',
  },
  menu: {
    position: 'absolute',
    listStyleTpe: 'none',
    margin: '5px 0',
    padding: 0,
    background: 'white',
    width: '100px',
    marginTop: '40px',
  },
  menuItem: {
    cursor: 'pointer',
    flexDirection: 'row',
  },
  menuIconOpen: {
    transform: 'rotate(-180deg)',
    transition: 'transform 0.2s',
  },
  menuIconClosed: {
    transition: 'transform 0.2s',
  },
};
