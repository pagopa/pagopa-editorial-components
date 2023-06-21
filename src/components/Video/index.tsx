import { useEffect, useRef, useState } from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import EContainer from '../EContainer';
import { type Generic, type CommonProps } from '../../types/components';
import { isJSX, useIsVisible } from '../../utils';

export interface VideoProps extends CommonProps {
  /** Video url */
  src?: string;
  /** Video starts automatically as soon is visible */
  autoplay?: boolean;
  loop?: boolean;
  title?: string;
  subtitle?: string;
  /** When true the full layout is used. Default: false */
  full?: boolean;
  /** when the full layout is not used, this props change the layout alignment.
   * Default: false (left aligned layout)
   */
  reverse?: boolean;
  /** String or a custome element to be shown when something goes wrong */
  fallback?: string | Generic;
  /** Play button text */
  playButtonLabel?: string;
}

const Video = (props: VideoProps) => {
  const {
    title,
    subtitle,
    src,
    autoplay = false,
    loop = false,
    full = false,
    reverse = false,
    theme = 'dark',
    fallback = 'Ops! Qualcosa è andato storto... Riprova in un secondo momento.',
    playButtonLabel = 'Guarda il video',
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
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
    } catch (error) {
      console.warn(error);
    }
  };

  const type = src?.split('.').pop() ?? ('mp4' || '');

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
          <VideoText title={title} subtitle={subtitle} theme={theme} />
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

interface VideoTextProps extends CommonProps {
  title?: string;
  subtitle?: string;
}

const VideoText = ({ title, subtitle, theme = 'dark' }: VideoTextProps) => {
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

export default Video;
