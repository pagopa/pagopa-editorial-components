import {
  Stack,
  type StackProps,
  type SxProps,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type CommonProps } from 'types/components';

import './MenuDropdown.css';

export interface MenuDropdownProp extends Partial<StackProps>, CommonProps {
  label: string;
  children?: JSX.Element[];
  active?: boolean;
}

const TIMEOUT_LENGTH = 100;

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
  const { palette, breakpoints } = useTheme();

  const md = useMediaQuery(breakpoints.up('md'));

  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.primary.dark;

  const openFromMenu = () => {
    setMenuOpen(true);
  };

  const closeFromMenu = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, TIMEOUT_LENGTH);
  };

  const openFromDropdown = () => {
    setDropdownOpen(true);
  };

  const closeFromDropdown = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, TIMEOUT_LENGTH);
  };

  const toggleMenu = () => {
    setMenuOpen((status) => !status);
  };

  const defaultProps = {
    menu: {
      md: {
        onMouseEnter: openFromMenu,
        onMouseLeave: closeFromMenu,
        paddingY: 2,
        borderColor:
          theme === 'dark'
            ? palette.primary.contrastText
            : palette.primary.dark,
        sx: { ...(active && styles.active) },
      },
      xs: {
        onClick: toggleMenu,
      },
    },
    dropdown: {
      md: {
        className: hasChildren ? 'bubble' : '',
        onMouseEnter: openFromDropdown,
        onMouseLeave: closeFromDropdown,
      },
    },
  };

  return (
    <Stack {...(md ? defaultProps.menu.md : defaultProps.menu.xs)}>
      <Stack sx={styles.menuItem} {...button} color={textColor}>
        <Typography variant="sidenav" color="inherit">
          {label}
        </Typography>
        {hasChildren && (
          <ArrowDropDownIcon
            color="inherit"
            fontSize="small"
            sx={menuOpen && !md ? styles.menuIconOpen : styles.menuIconClosed}
          />
        )}
      </Stack>
      {(menuOpen || dropdownOpen) && (
        <Stack {...(md && defaultProps.dropdown.md)}>
          <Stack sx={{ transform: { md: 'rotate(180deg)' } }}>{children}</Stack>
        </Stack>
      )}
    </Stack>
  );
};

const styles: Record<string, SxProps> = {
  active: {
    borderBottomStyle: 'solid',
    borderBottomWidth: { md: '2px', xs: 0 },
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
