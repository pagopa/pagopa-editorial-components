import { useEffect, useRef } from 'react';
import YouTube, { type YouTubePlayer } from 'react-youtube';
import { type PhotoVideoTextProps } from './Text';
import { Link, Grid, Stack } from '@mui/material';
import Text from './Text';
import EContainer from '../EContainer';
import { useIsVisible } from '../../utils';

export interface PhotoVideoYouTubeProps extends PhotoVideoTextProps {
  full: boolean;
  reverse: boolean;
  youtubeID: string;
  autoplay: boolean;
  loop: boolean;
  playButtonLabel?: string;
  useYoutubeLayout?: boolean;
  src?: string;
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
}: PhotoVideoYouTubeProps) => {
  const videoRef = useRef<YouTubePlayer | HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);

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
  return (
    <EContainer
      spacing={{ xs: 3, md: 16 }}
      py={7}
      alignItems="center"
      direction={reverse ? 'row-reverse' : 'row'}
      background={theme === 'dark' ? 'primary.dark' : 'white'}
    >
      <Grid item xs={12} md={full ? 12 : 6}>
        {useYoutubeLayout ? (
          <video
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
            <source src={src} type={`video/${type}`} />
          </video>
        ) : (
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
        )}
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
