import {
  Stack,
  type StackProps,
  type SxProps,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface MenuDropdownProp extends Partial<StackProps> {
  label: string;
  children?: JSX.Element[];
  active?: boolean;
}

const timeoutLength = 300;

export const MenuDropdown = ({
  label,
  children,
  active,
  ...button
}: MenuDropdownProp) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasChildren = children?.length;
  const style = {
    ...styles.MenuDropdown,
    ...(active && styles.active),
  };

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
    <Stack sx={style}>
      <Stack
        onMouseEnter={openMenu}
        onMouseLeave={leaveMenu}
        sx={styles.menuItem}
        {...button}
      >
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
