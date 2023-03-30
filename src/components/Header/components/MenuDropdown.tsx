import {
  Stack,
  type StackProps,
  type SxProps,
  Typography,
  useTheme,
  useMediaQuery,
  type LinkProps,
  Link,
} from '@mui/material';
import { isValidElement, type Key, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type CommonProps } from 'types/components';

import './MenuDropdown.css';

const TIMEOUT_LENGTH = 100;

interface DropdownLink extends LinkProps {
  label: string;
  key: Key;
}

type DropdownItem = JSX.Element | DropdownLink;

const isLink = (item: DropdownItem): item is DropdownLink =>
  'label' in item && !isValidElement(item);

export interface MenuDropdownProp
  extends Partial<Omit<StackProps, 'children'>>,
    CommonProps {
  label: string;
  active?: boolean;
  items?: DropdownItem[];
}

export const MenuDropdown = ({
  label,
  active,
  theme,
  items,
  ...button
}: MenuDropdownProp) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const hasLinks = items?.length;
  const { palette, breakpoints, spacing } = useTheme();

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
        className: hasLinks ? 'bubble' : '',
        onMouseEnter: openFromDropdown,
        onMouseLeave: closeFromDropdown,
      },
    },
    arrow: {
      xs: {
        sx: menuOpen ? styles.menuIconOpen : styles.menuIconClosed,
      },
    },
  };

  return (
    <Stack {...(md ? defaultProps.menu.md : defaultProps.menu.xs)}>
      <Stack
        sx={{ ...styles.menuItem, ...(!hasLinks && { cursor: 'pointer' }) }}
        color={textColor}
        {...button}
      >
        <Typography variant="sidenav" color="inherit">
          {label}
        </Typography>
        {hasLinks && (
          <ArrowDropDownIcon
            color="inherit"
            fontSize="small"
            {...(!md && defaultProps.arrow.xs)}
          />
        )}
      </Stack>
      {(menuOpen || dropdownOpen) && (
        <Stack {...(md && defaultProps.dropdown.md)}>
          <Stack sx={{ transform: { md: 'rotate(180deg)' } }}>
            {hasLinks &&
              items?.map((item: DropdownItem) => {
                return isLink(item) ? (
                  <Link
                    variant="body1"
                    underline="none"
                    sx={{
                      color: {
                        md: palette.primary.contrastText,
                        xs: textColor,
                      },
                      textIndent: { xs: spacing(2), md: 0 },
                    }}
                    {...item}
                  >
                    {item.label}
                  </Link>
                ) : (
                  item
                );
              })}
          </Stack>
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
    cursor: { xs: 'pointer', md: 'default' },
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
