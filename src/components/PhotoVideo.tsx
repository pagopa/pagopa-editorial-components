import { useRef, useState } from 'react';
import { Box, Link, Container, Grid, Stack, Typography } from '@mui/material';
import PlayArrow from '@mui/icons-material/PlayArrow';
// import { type Generic } from 'types/components';
import { isJSX } from '../utils';
import YouTube, { type YouTubePlayer } from 'react-youtube';
import { type CommonProps } from 'types/components';

export interface PhotoVideoProps extends YProps {
  src: string;
  altText?: string;
  title?: string;
  subtitle?: string;
  playButtonLabel?: string;
  caption?: string;
  captionAlign?: 'left' | 'center';
  maxHeight?: string;
  full?: boolean;
}

const youtubeParser = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

interface YProps extends Ytext {
  full?: boolean;
  reverse?: boolean;
  youtubeID: string;
  autoplay?: boolean;
  playButtonLabel?: string;
}

interface Ytext extends CommonProps {
  title?: string;
  subtitle?: string;
}

const Text = ({ title, subtitle, theme = 'dark' }: Ytext) => {
  const color = theme === 'dark' ? 'primary.contrastText' : 'text.primary';
  return (
    <>
      {title && (
        <Typography variant="h5" mb={4} color={color}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography paragraph sx={{ fontSize: '16px' }} mb={3} color={color}>
          {subtitle}
        </Typography>
      )}
    </>
  );
};

const YouTubeVideo = ({
  title,
  subtitle,
  full,
  reverse,
  theme,
  youtubeID,
  autoplay = false,
  playButtonLabel = 'Guarda il video',
}: YProps) => {
  const videoRef = useRef<YouTubePlayer>(null);

  const play = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      videoRef.current.playVideo();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component="section"
      bgcolor={theme === 'dark' ? 'primary.dark' : 'white'}
      py={7}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 3, md: 16 }}
          alignItems={'center'}
          direction={reverse ? 'row-reverse' : 'row'}
        >
          <Grid item xs={12} md={full ? 12 : 6}>
            <YouTube
              videoId={youtubeID}
              id={`video-${youtubeID}`}
              className="video__frame"
              onReady={({ target }) => {
                videoRef.current = target;
              }}
              style={{
                aspectRatio: 1.777,
                borderRadius: '25px',
                overflow: 'hidden',
              }}
              opts={{
                width: '100%',
                height: '100%',
                host: 'https://www.youtube-nocookie.com',
                playerVars: {
                  autoplay: autoplay ? 1 : 0,
                  showinfo: 0,
                  mute: 1,
                },
              }}
            />
          </Grid>
          {!full && (
            <Grid item md={6}>
              <Text title={title} subtitle={subtitle} theme={theme} />
              <Stack direction="row" alignItems="center">
                <Link
                  component="button"
                  onClick={play}
                  sx={{
                    fontWeight: 700,
                    fontSize: '16px',
                    textDecoration: 'none',
                    color:
                      theme === 'dark'
                        ? 'primary.contrastText'
                        : 'primary.dark',
                  }}
                >
                  {playButtonLabel}
                </Link>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
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
    full = false,
    reverse = false,
    theme = 'dark',
  } = props;
  const [playing, setPlaying] = useState(autoplay);
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
  return isYoutubeSrc ? (
    <YouTubeVideo
      title={title}
      subtitle={subtitle}
      youtubeID={youtubeParser(src) || ''}
      theme={theme}
      autoplay={autoplay}
      full={full}
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
