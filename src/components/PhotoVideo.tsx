import { useRef, useState } from 'react';
import { Box, Link, Container, Grid, Stack, Typography } from '@mui/material';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { type Generic } from 'types/components';
import { isJSX } from '../utils';
import YouTube, { type YouTubePlayer } from 'react-youtube';

export interface PhotoVideoProps {
  src: string | Generic;
  altText?: string;
  title?: string;
  subtitle?: string;
  playButtonLabel?: string;
  caption?: string;
  captionAlign?: 'left' | 'center';
  maxHeight?: string;
  autoPlay?: boolean;
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
    autoPlay = false,
  } = props;
  const [playing, setPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement | YouTubePlayer>(null);

  const scrIsVideo =
    !isJSX(src) && (/^.*\.(mp4|webm|ogg)$/.test(src) || youtubeParser(src));

  const isYoutubeSrc = scrIsVideo && youtubeParser(src);

  const tooglePlay = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      setPlaying(!playing);
      if (playing) {
        if (isYoutubeSrc) return videoRef.current.pauseVideo();
        await videoRef.current?.pause();
      } else {
        if (isYoutubeSrc) return videoRef.current.playVideo();
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
    const youtubeID = youtubeParser(src);
    if (youtubeID) {
      return (
        <YouTube
          videoId={youtubeID}
          id={`video-${youtubeID}`}
          className="video__frame"
          style={{ width: '100%', height: '100%' }}
          onReady={({ target }) => {
            videoRef.current = target;
          }}
          onEnd={() => {
            setPlaying(false);
          }}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: autoPlay ? 1 : 0,
              showinfo: 0,
              mute: 1,
            },
          }}
        />
      );
    }
    if (scrIsVideo) {
      const type = src.split('.').pop() ?? 'mp4';
      return (
        <video
          ref={videoRef}
          style={commonCSSStyle}
          autoPlay={autoPlay}
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
