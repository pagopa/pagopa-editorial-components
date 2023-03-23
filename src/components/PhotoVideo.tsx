import { useRef } from 'react';
import { Box, Link, Container, Grid, Stack, Typography } from '@mui/material';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { type Generic } from 'types/components';
import { isJSX } from '../utils';

export interface PhotoVideoProps {
  src: string | Generic;
  altText?: string;
  title?: string;
  subtitle?: string;
  playButtonLabel?: string;
  caption?: string;
  captionAlign?: 'left' | 'center';
  maxHeight?: string;
}

const PhotoVideo = (props: PhotoVideoProps) => {
  const {
    title,
    subtitle,
    src,
    caption,
    captionAlign = 'center',
    altText,
    playButtonLabel = 'Riproduci video',
    maxHeight = '600px',
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      await videoRef.current?.play();
    } catch (error) {
      console.error(error);
    }
  };

  const scrIsVideo = !isJSX(src) && /^.*\.(mp4|webm|ogg)$/.test(src);

  const renderBackground = () => {
    const commonCSSStyle: React.CSSProperties = {
      width: 'inherit',
      height: 'inherit',
      objectFit: 'cover',
    };
    if (isJSX(src)) return src;
    if (scrIsVideo) {
      const type = src.split('.').pop() ?? 'mp4';
      return (
        <video ref={videoRef} style={commonCSSStyle}>
          <source src={src} type={`video/${type}`} />
        </video>
      );
    }
    return <img alt={altText} src={src} style={commonCSSStyle} />;
  };

  const onlyPlayButton = Boolean(!title && !subtitle);
  return (
    <>
      <Box
        component="section"
        sx={{
          position: 'relative',
          height: maxHeight,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: scrIsVideo
              ? 'rgba(0, 0, 0, 0.6)'
              : 'linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));',
          }}
        >
          <Container maxWidth="lg" sx={{ height: 'inherit' }}>
            <Grid container sx={{ height: 'inherit' }}>
              <Grid
                item
                xs={12}
                lg={onlyPlayButton ? 12 : 4}
                sx={{ height: 'inherit' }}
              >
                <Stack
                  alignItems={onlyPlayButton ? 'center' : 'initial'}
                  justifyContent="center"
                  sx={{ height: 'inherit' }}
                >
                  {title && (
                    <Typography
                      variant="h6"
                      mb={4}
                      color="primary.contrastText"
                    >
                      {title}
                    </Typography>
                  )}
                  {subtitle && (
                    <Typography
                      variant="body1"
                      mb={3}
                      color="primary.contrastText"
                    >
                      {subtitle}
                    </Typography>
                  )}
                  {scrIsVideo && (
                    <Link
                      role="button"
                      onClick={play}
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.contrastText',
                      }}
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="h6" color="inherit">
                          {playButtonLabel}
                        </Typography>
                        <PlayArrow
                          color="inherit"
                          sx={{ ml: 1 }}
                          fontSize="small"
                          aria-hidden="true"
                        />
                      </Stack>
                    </Link>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {renderBackground()}
        </Box>
      </Box>
      {caption && (
        <Box sx={{ backgroundColor: 'background.paper' }} pt={2} pb={4}>
          <Container maxWidth="lg" sx={{ height: 'inherit' }}>
            <Typography variant="body1" textAlign={captionAlign}>
              {caption}
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
};

export default PhotoVideo;
