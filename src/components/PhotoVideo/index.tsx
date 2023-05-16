import { useRef, useState } from 'react';
import { Box, Link, Container, Grid, Stack, Typography } from '@mui/material';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { isJSX } from '../../utils';
import YouTubeVideo, { type PhotoVideoYouTubeProps } from './YouTube';
import Text from './Text';

export interface PhotoVideoProps extends PhotoVideoYouTubeProps {
  src: string;
  altText?: string;
  caption?: string;
  captionAlign?: 'left' | 'center';
  maxHeight?: string;
}

const youtubeParser = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

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
    autoplay = false,
    loop = false,
    full = false,
    reverse = false,
    theme = 'dark',
    useYoutubeLayout = false,
  } = props;
  const [playing, setPlaying] = useState(autoplay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrIsVideo =
    !isJSX(src) && (/^.*\.(mp4|webm|ogg)$/.test(src) || youtubeParser(src));

  const isYoutubeSrc = scrIsVideo && youtubeParser(src);

  const tooglePlay = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      setPlaying(!playing);
      if (playing) {
        videoRef.current?.pause();
      } else {
        await videoRef.current?.play();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        <video
          ref={videoRef}
          style={commonCSSStyle}
          autoPlay={autoplay}
          onClick={tooglePlay}
          onEnded={() => {
            setPlaying(false);
          }}
        >
          <source src={src} type={`video/${type}`} />
        </video>
      );
    }
    return <img alt={altText} src={src} style={commonCSSStyle} />;
  };

  const onlyPlayButton = Boolean(!title && !subtitle);
  return isYoutubeSrc || useYoutubeLayout ? (
    <YouTubeVideo
      src={src}
      useYoutubeLayout={useYoutubeLayout}
      title={title}
      subtitle={subtitle}
      youtubeID={youtubeParser(src) || ''}
      theme={theme}
      autoplay={autoplay}
      full={full}
      loop={loop}
      reverse={reverse}
    />
  ) : (
    <>
      <Box
        component="section"
        sx={{
          position: 'relative',
          height: maxHeight,
          overflow: 'hidden',
        }}
      >
        {!playing && (
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
                    <Text title={title} subtitle={subtitle} theme="dark" />
                    {scrIsVideo && (
                      <Link
                        component="button"
                        onClick={tooglePlay}
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
        )}
        <Box
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {!isYoutubeSrc && renderBackground()}
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
