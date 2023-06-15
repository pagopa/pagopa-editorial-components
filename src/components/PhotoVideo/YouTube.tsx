import { useEffect, useRef, useState } from 'react';
import YouTube, { type YouTubePlayer } from 'react-youtube';
import { type PhotoVideoTextProps } from './Text';
import { Link, Grid, Stack, Typography } from '@mui/material';
import Text from './Text';
import EContainer from '../EContainer';
import { isJSX, useIsVisible } from '../../utils';
import { type Generic } from '../../types/components';

export interface PhotoVideoYouTubeProps extends PhotoVideoTextProps {
  full: boolean;
  reverse: boolean;
  youtubeID: string;
  autoplay: boolean;
  loop: boolean;
  playButtonLabel?: string;
  useYoutubeLayout?: boolean;
  src?: string;
  fallback: Generic | string;
}

const YouTubeVideo = ({
  title,
  subtitle,
  full,
  reverse,
  theme,
  loop,
  youtubeID,
  autoplay,
  useYoutubeLayout,
  src = '',

  playButtonLabel = 'Guarda il video',
  fallback,
}: PhotoVideoYouTubeProps) => {
  const videoRef = useRef<YouTubePlayer | HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const startVideoWhenVisible = async () => {
      if (autoplay && isVisible) await play();
    };
    startVideoWhenVisible().catch(console.error);
  }, [isVisible]);

  const play = async (e?: React.MouseEvent) => {
    try {
      e?.preventDefault();
      await videoRef.current?.play();
      videoRef.current.playVideo();
    } catch (error) {
      console.warn(error);
    }
  };

  const type = src.split('.').pop() ?? 'mp4';

  const render = () => {
    if (error) {
      return isJSX(fallback) ? (
        fallback
      ) : (
        <Typography variant="h6" color="background.paper" textAlign="center">
          {fallback}
        </Typography>
      );
    }
    if (useYoutubeLayout) {
      return (
        <video
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          controlsList="nodownload"
          playsInline
          ref={videoRef}
          controls
          muted
          loop={loop}
          style={{
            aspectRatio: 1.777,
            borderRadius: '25px',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <source
            src={src}
            type={`video/${type}`}
            onError={() => {
              setError(true);
            }}
          />
        </video>
      );
    }
    return (
      <YouTube
        videoId={youtubeID}
        id={`video-${youtubeID}`}
        className="video__frame"
        onReady={({ target }) => {
          videoRef.current = target;
        }}
        onEnd={async () => {
          loop && videoRef.current.playVideo();
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
    );
  };

  return (
    <EContainer
      spacing={{ xs: 3, md: 16 }}
      py={7}
      alignItems="center"
      direction={reverse ? 'row-reverse' : 'row'}
      background={theme === 'dark' ? 'primary.dark' : 'white'}
    >
      <Grid item xs={12} md={full ? 12 : 6}>
        {render()}
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
                  theme === 'dark' ? 'primary.contrastText' : 'primary.dark',
              }}
            >
              {playButtonLabel}
            </Link>
          </Stack>
        </Grid>
      )}
    </EContainer>
  );
};

export default YouTubeVideo;
