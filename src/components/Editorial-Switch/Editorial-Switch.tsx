import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Ctas as EditorialCtas,
  type EditorialCtaProps,
} from '../Editorial/Ctas';
import {
  Image as EditorialImage,
  type EditorialImageProps,
} from '../Editorial/Image';
import {
  Content as EditorialContent,
  type EditorialContentProps,
} from '../Editorial/Content';
import { type CommonProps } from 'types/components';
import EContainer from '../../components/EContainer';
import { useTheme } from '@mui/material/styles';

interface TitleSubtitleBlockProps {
  toptitle: string;
  topsubtitle?: string;
  theme: 'dark' | 'light';
}

interface ButtonSwitchRowBlockProps {
  buttons: string[];
  onButtonClick: (button: string) => void;
  theme: 'dark' | 'light';
}

interface ContentItem {
  eyelet: string;
  body: string;
  title: string;
  ctaButtons?: EditorialCtaProps['ctaButtons'];
  pattern: 'dots' | 'solid' | 'none';
  image: EditorialImageProps['image'];
}

const TitleSubtitleBlock = ({
  toptitle,
  topsubtitle,
  theme,
}: TitleSubtitleBlockProps) => {
  const { palette } = useTheme();
  const color =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;

  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h4"
        component={'div'}
        mb={3}
        mt={3}
        textAlign="center"
        color={color}
      >
        {toptitle}
      </Typography>
      {topsubtitle && (
        <Typography
          variant="body2"
          component={'div'}
          mb={4}
          textAlign="center"
          color={color}
        >
          {topsubtitle}
        </Typography>
      )}
    </div>
  );
};

const SplitButton = ({
  buttons,
  selectedButton,
  onButtonClick,
}: {
  buttons: string[];
  selectedButton: string;
  onButtonClick: (button: string) => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (button: string) => {
    onButtonClick(button);
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="split-button-menu"
        aria-expanded={anchorEl ? 'true' : undefined}
        aria-haspopup="menu"
        onClick={handleClick}
      >
        {selectedButton}
      </Button>
      <Menu
        id="split-button-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {buttons.map((button) => (
          <MenuItem
            key={button}
            selected={button === selectedButton}
            onClick={() => {
              handleMenuItemClick(button);
            }}
          >
            {button}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const ButtonSwitchRowBlock = ({
  buttons,
  onButtonClick,
  theme,
  selectedButton,
}: ButtonSwitchRowBlockProps & { selectedButton: string }) => {
  const muiTheme = useTheme();
  const isLarge = useMediaQuery(muiTheme.breakpoints.up('lg'));
  const { palette } = useTheme();
  const color =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;
  const buttonsTheme = [
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'contained',
    },
    {
      color: theme === 'dark' ? 'negative' : 'primary',
      variant: 'outlined',
    },
  ];

  return isLarge ? (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      style={{ color }}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      role="group"
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={() => {
            onButtonClick(button);
          }}
          {...buttonsTheme}
        >
          {button}
        </Button>
      ))}
    </ButtonGroup>
  ) : (
    <SplitButton
      buttons={buttons}
      selectedButton={selectedButton}
      onButtonClick={onButtonClick}
    />
  );
};

export interface EditorialProps
  extends CommonProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  reversed?: boolean;
  width: 'wide' | 'standard' | 'center';
  toptitle: string;
  topsubtitle?: string;
  buttons: string[];
  content: ContentItem[];
}

export const EditorialSwitch = (props: EditorialProps) => {
  const { buttons, content, theme, reversed, width, toptitle, topsubtitle } =
    props;
  const [selectedButton, setSelectedButton] = useState(buttons[0]);
  const [currentContent, setCurrentContent] = useState<ContentItem>(content[0]);

  const handleButtonClick = (button: string) => {
    const buttonIndex = buttons.indexOf(button);
    if (buttonIndex !== -1) {
      setSelectedButton(button);
      setCurrentContent(content[buttonIndex]);
    }
  };
  const { palette } = useTheme();

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
      );
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else {
      // Return a no-op function when window is not defined
      return () => {};
    }
  }, []);

  const backgroundColor =
    theme === 'dark' ? palette.primary.dark : palette.background.paper;

  const columns = {
    wide: 6,
    standard: 5,
    center: 4,
  };

  const containerDirection = isMobile
    ? reversed
      ? 'column-reverse'
      : 'column'
    : reversed
    ? 'row-reverse'
    : 'row';

  const gridItemStyles =
    width === 'standard' ? { ...styles.half, ...styles.offset } : styles.half;

  return (
    <Box>
      <EContainer
        sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
        background={backgroundColor}
      >
        <TitleSubtitleBlock
          toptitle={toptitle}
          topsubtitle={topsubtitle}
          theme={theme}
        />
        <ButtonSwitchRowBlock
          buttons={buttons}
          selectedButton={selectedButton}
          onButtonClick={handleButtonClick}
          theme={theme}
        />
      </EContainer>
      <EContainer
        alignItems="center"
        background={backgroundColor}
        direction={containerDirection}
        py={8}
        spacing={2}
      >
        <Grid item md={columns[width]} sx={gridItemStyles}>
          <Stack gap={4}>
            <EditorialContent {...currentContent} theme={theme} />
            <EditorialCtas {...currentContent} theme={theme} />
          </Stack>
        </Grid>
        <Grid item md={columns[width]}>
          <EditorialImage {...currentContent} theme={theme} />
        </Grid>
      </EContainer>
    </Box>
  );
};

const styles = {
  half: {
    display: 'grid',
    justifyContent: 'center',
  },
  offset: {
    marginLeft: '8.33%',
    paddingRight: '4.15%',
  },
};
