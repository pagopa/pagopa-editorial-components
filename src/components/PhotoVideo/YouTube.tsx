import { useRef } from 'react';
import YouTube, { type YouTubePlayer } from 'react-youtube';
import { type PhotoVideoTextProps } from './Text';
import { Box, Link, Container, Grid, Stack } from '@mui/material';
import Text from './Text';

export interface PhotoVideoYouTubeProps extends PhotoVideoTextProps {
  full?: boolean;
  reverse?: boolean;
  youtubeID: string;
  autoplay?: boolean;
  playButtonLabel?: string;
}

const YouTubeVideo = ({
  title,
  subtitle,
  full,
  reverse,
  theme,
  youtubeID,
  autoplay = false,
  playButtonLabel = 'Guarda il video',
}: PhotoVideoYouTubeProps) => {
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

export default YouTubeVideo;
