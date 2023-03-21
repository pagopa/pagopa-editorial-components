import {
  Stack,
  type StackProps,
  type SxProps,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type CommonProps } from 'types/components';

export interface MenuDropdownProp extends Partial<StackProps>, CommonProps {
  label: string;
  children?: JSX.Element[];
  active?: boolean;
}

const timeoutLength = 300;

export const MenuDropdown = ({
  label,
  children,
  active,
  theme,
  ...button
}: MenuDropdownProp) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasChildren = children?.length;
  const activeStyle = {
    ...(active && styles.active),
  };
  const { palette, spacing } = useTheme();

  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.primary.dark;

  const openMenu = () => {
    setMenuOpen(true);
  };

  const leaveMenu = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, timeoutLength);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const leaveDropdown = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, timeoutLength);
  };

  return (
    <Stack
      sx={activeStyle}
      borderColor={
        theme === 'dark' ? palette.primary.contrastText : palette.primary.dark
      }
      paddingY={spacing(2)}
      onMouseEnter={openMenu}
      onMouseLeave={leaveMenu}
    >
      <Stack sx={styles.menuItem} {...button} color={textColor}>
        <Typography variant="sidenav" color="inherit">
          {label}
        </Typography>
        {hasChildren && (
          <ArrowDropDownIcon
            color="inherit"
            fontSize="small"
            sx={menuOpen ? styles.menuIconOpen : styles.menuIconClosed}
          />
        )}
      </Stack>
      {menuOpen || dropdownOpen ? (
        <Stack
          onMouseEnter={openDropdown}
          onMouseLeave={leaveDropdown}
          sx={styles.menu}
        >
          {children}
        </Stack>
      ) : null}
    </Stack>
  );
};

const styles: Record<string, SxProps> = {
  active: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
  },
  menu: {
    position: 'absolute',
    background: 'white',
    width: '130px',
    marginTop: '40px',
    marginLeft: '-5px',
    paddingX: '20px',
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
