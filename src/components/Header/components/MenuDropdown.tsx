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
import { isValidElement, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type CommonProps } from 'types/components';
import { DialogBubble } from '../../../components/DialogBubble';

const TIMEOUT_LENGTH = 100;

interface DropdownLink extends LinkProps {
  label: string;
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

  const Dropdown = ({ children }: { children: JSX.Element[] }) =>
    md ? (
      <DialogBubble
        onMouseEnter={hoverOnDropdown}
        onMouseLeave={leavesDropdown}
      >
        {children}
      </DialogBubble>
    ) : (
      <Stack onClick={toggleMenu}>{children}</Stack>
    );

  return (
    <Stack sx={styles.menu} {...menuEventsHandlers}>
      <Stack sx={styles.item} {...button}>
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
      </Stack>
      {hasLinks && dropdownVisible && (
        <Dropdown>
          {items?.map((item: DropdownItem, index) =>
            isLink(item) ? (
              <Link
                variant="body1"
                underline="none"
                key={item.key ?? index}
                sx={styles.link}
                {...item}
              >
                {item.label}
              </Link>
            ) : (
              item
            )
          )}
        </Dropdown>
      )}
    </Stack>
  );
};

const useStyles = (props: MenuDropdownProp, mui: Theme) => {
  const textColor =
    props.theme === 'dark'
      ? mui.palette.primary.contrastText
      : mui.palette.primary.dark;

  return {
    menu: {
      paddingY: { md: 2 },
      borderColor: textColor,
      borderBottomStyle: 'solid',
      borderBottomWidth: { md: props.active ? 2 : 0, xs: 0 },
    },
    item: {
      cursor: {
        md: props.items?.length ? 'default' : 'pointer',
        xs: 'pointer',
      },
      flexDirection: 'row',
      color: textColor,
    },
    link: {
      color: { xs: textColor, md: mui.palette.primary.contrastText },
      textIndent: { xs: mui.spacing(2), md: 0 },
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
      transform: { xs: 'rotate(-180deg)', md: '' },
    },
  };
};
