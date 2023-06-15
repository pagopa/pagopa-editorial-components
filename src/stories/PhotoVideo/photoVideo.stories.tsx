import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import PhotoVideo from '../../components/PhotoVideo';
import image from '../assets/hero_background.jpg';
import video from '../assets/720.mp4';
import { EIcon } from '../../components/EIcon';
import { Stack, Typography } from '@mui/material';

export default {
  title: 'PhotoVideo',
  component: PhotoVideo,
} as ComponentMeta<typeof PhotoVideo>;

const Template: ComponentStory<typeof PhotoVideo> = (args) => (
  <PhotoVideo {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  title: 'Nam eget dui. Etiam rhoncus Maecenas tempus',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
};

export const Minimal = Template.bind({});
Minimal.args = {
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
};

export const Full = Template.bind({});
Full.args = {
  title: 'Nam eget dui. Etiam rhoncus Maecenas tempus',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  caption:
    'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  captionAlign: 'left',
};

export const Autoplay = Template.bind({});
Autoplay.args = {
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: true,
};

export const Image = Template.bind({});
Image.args = {
  title: 'Nam eget dui. Etiam rhoncus Maecenas tempus',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  src: image,
  caption:
    'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  captionAlign: 'left',
};

export const YouTube = Template.bind({});
YouTube.args = {
  title: 'Aenean commodo ligula eget dolor',
  subtitle:
    'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
  src: 'https://www.youtube.com/watch?v=a__7m1BcL-g',
  autoplay: true,
  full: false,
  loop: true,
};

export const YouTubeFull = Template.bind({});
YouTubeFull.args = {
  src: 'https://www.youtube.com/watch?v=a__7m1BcL-g',
  autoplay: true,
  full: true,
  loop: true,
};

export const YouTubeLightReverse = Template.bind({});
YouTubeLightReverse.args = {
  title: 'Aenean commodo ligula eget dolor',
  subtitle:
    'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
  src: 'https://www.youtube.com/watch?v=a__7m1BcL-g',
  reverse: true,
  theme: 'light',
  loop: true,
};

export const selHostingWithYoutubeLayout = Template.bind({});
selHostingWithYoutubeLayout.args = {
  title: 'Aenean commodo ligula eget dolor',
  subtitle:
    'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
  src: video,
  full: true,
  autoplay: true,
  loop: true,
  useYoutubeLayout: true,
};

export const selHostingWithYoutubeLayoutFallback = Template.bind({});
selHostingWithYoutubeLayoutFallback.args = {
  title: 'Aenean commodo ligula eget dolor',
  subtitle:
    'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
  src: '',
  full: true,
  autoplay: true,
  loop: true,
  useYoutubeLayout: true,
};

export const selHostingWithYoutubeLayoutFallbackJsx = Template.bind({});
selHostingWithYoutubeLayoutFallbackJsx.args = {
  title: 'Aenean commodo ligula eget dolor',
  subtitle:
    'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
  src: '',
  full: true,
  autoplay: true,
  loop: true,
  useYoutubeLayout: true,
  fallback: (
    <Stack textAlign="center">
      <EIcon icon="ErrorOutline" color="background.paper" />
      <Typography variant="h6" color="background.paper">
        Spiacenti il video non è disponibile in questo momento
      </Typography>
    </Stack>
  ),
};
