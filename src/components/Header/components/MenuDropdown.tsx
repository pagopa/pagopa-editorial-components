import {
  Stack,
  type StackProps,
  Typography,
  useTheme,
  useMediaQuery,
  type LinkProps,
  Link,
  type Theme,
} from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type Generic, type CommonProps } from '../../../types/components';
import { DialogBubble } from '../../../components/DialogBubble';
import { isJSX } from '../../../utils';
import { sendThemeDropdown } from '../../../types/SendTheme';

const TIMEOUT_LENGTH = 100;

interface DropdownLink extends LinkProps {
  label: string;
}

type DropdownItem = Generic | DropdownLink;

export interface MenuDropdownProp
  extends Partial<Omit<LinkProps, 'children'>>,
    CommonProps {
  label: string;
  active?: boolean;
  items?: DropdownItem[];
}

export const MenuDropdown = (props: MenuDropdownProp) => {
  // props
  const { label, active, theme, items, ...button } = props;

  // state
  const [menuHover, setMenuHover] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  const hoverOnMenu = () => {
    setMenuHover(true);
  };

  const leavesMenu = () => {
    setTimeout(() => {
      setMenuHover(false);
    }, TIMEOUT_LENGTH);
  };

  const hoverOnDropdown = () => {
    setDropdownHover(true);
  };

  const leavesDropdown = () => {
    setTimeout(() => {
      setDropdownHover(false);
    }, TIMEOUT_LENGTH);
  };

  const toggleMenu = () => {
    setMenuHover((status) => !status);
  };

  // style
  const hasLinks = items?.length;
  const mui = useTheme();
  const md = useMediaQuery(mui.breakpoints.up('md'));
  const styles = useStyles(props, mui);

  const dropdownVisible = menuHover || dropdownHover;

  const menuEventsHandlers = md
    ? {
        onMouseEnter: hoverOnMenu,
        onMouseLeave: leavesMenu,
      }
    : {
        onClick: toggleMenu,
      };

  const Dropdown = ({
    children,
    ...stackProps
  }: { children: JSX.Element[] } & StackProps) =>
    md ? (
      <DialogBubble
        {...stackProps}
        onMouseEnter={hoverOnDropdown}
        onMouseLeave={leavesDropdown}
      >
        {children}
      </DialogBubble>
    ) : (
      <Stack {...stackProps} onClick={toggleMenu}>
        {children}
      </Stack>
    );

  return (
    <Stack sx={styles.menu} {...menuEventsHandlers}>
      <Link sx={styles.item} {...button}>
        <Typography variant="sidenav" color="inherit">
          {label}
        </Typography>
        {hasLinks && (
          <ArrowDropDownIcon
            color="inherit"
            fontSize="small"
            sx={{
              ...(!md && dropdownVisible && styles.arrowAnimate),
            }}
          />
        )}
      </Link>
      {hasLinks && dropdownVisible && (
        <Dropdown gap={1}>
          {items?.map((item: DropdownItem, index) =>
            isJSX(item) ? (
              item
            ) : (
              <Link
                variant="body1"
                underline="none"
                key={item.key ?? index}
                sx={styles.link}
                {...item}
              >
                {item.label}
              </Link>
            )
          )}
        </Dropdown>
      )}
    </Stack>
  );
};

const useStyles = (props: MenuDropdownProp, mui: Theme) => {
  const activeColor = '#0073e6';
  const defaultTextColor =
    props.theme === 'light'
      ? sendThemeDropdown.light.dropdownColor
      : mui.palette.primary.contrastText;
  const textColor = props.active ? activeColor : defaultTextColor;
  const arrowColor = props.active
    ? activeColor
    : mui.palette.primary.contrastText;
  const subItemColor = sendThemeDropdown.light.dropdownColor;
  return {
    menu: {
      paddingY: { md: 2 },
      borderColor: activeColor,
      borderBottomStyle: 'solid',
      borderBottomWidth: { md: props.active ? 3 : 0, xs: 0 },
    },
    item: {
      cursor: {
        md: props.items?.length ? 'default' : 'pointer',
        xs: 'pointer',
      },
      flexDirection: 'row',
      color: textColor,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      color: { xs: subItemColor, md: mui.palette.primary.contrastText },
      textIndent: { xs: mui.spacing(2), md: 0 },
      '&:not(.mainItem)': {
        color: subItemColor,
      },
      mainItem: {
        color: textColor,
      },
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
      transform: { xs: 'rotate(-180deg)', md: '' },
      color: arrowColor,
    },
  };
};
