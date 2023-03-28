import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme, type SxProps } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { type CommonProps } from 'types/components';
import { Ctas, type CtaProps } from '../Ctas';
import { HamburgerMenu } from './components/HamburgerMenu';
import { type NavigationProps, Navigation } from './components/Navigation';
import { type TitleProps, Content } from './components/Title';

interface BottomHeaderProps extends CtaProps, NavigationProps, TitleProps {}

export interface HeaderProps extends CommonProps, BottomHeaderProps {}

export const Header = ({
  product,
  theme,
  menu,
  ctaButtons,
  avatar,
  beta,
}: HeaderProps) => {
  const [headerOpen, setHeaderOpen] = useState(false);

  const openHeader = () => {
    setHeaderOpen(true);
  };

  const closeHeader = () => {
    setHeaderOpen(false);
  };

  const onResize = () => {
    setHeaderOpen(upMd);
  };

  useEffect(() => {
    onResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  const { palette, breakpoints } = useTheme();
  const backgroundColor =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;

  const betweenSmAndMd = useMediaQuery(breakpoints.between('sm', 'md'));
  const upMd = useMediaQuery(breakpoints.up('md'));
  const xs = useMediaQuery(breakpoints.only('xs'));

  const HeaderCtas = () => <Ctas {...{ theme, ctaButtons }} />;

  const HeaderInfo = () => (
    <Stack sx={styles.headerInfo}>
      <Content {...{ product, avatar, beta, theme }} />
      {!upMd && (
        <Stack direction="row" alignItems="center" gap={4}>
          {!xs && <HeaderCtas />}
          <HamburgerMenu
            onOpen={openHeader}
            onClose={closeHeader}
            open={headerOpen}
          />
        </Stack>
      )}
    </Stack>
  );

  const HeaderNavigation = () => (
    <Stack sx={styles.headerMenu}>
      <Navigation {...{ menu, theme }} />
      {!betweenSmAndMd && <HeaderCtas />}
    </Stack>
  );

  return (
    <Box bgcolor={backgroundColor} paddingX={{ xs: 1, sm: 3 }}>
      <Stack
        direction={{ md: 'row' }}
        paddingY={{ xs: 1, sm: 2, md: 0 }}
        gap={4}
      >
        <HeaderInfo />
        {headerOpen && <HeaderNavigation />}
      </Stack>
    </Box>
  );
};

const styles: Record<string, SxProps> = {
  headerMenu: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { md: 'center', xs: 'flex-start' },
    gap: { xs: 2 },
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
