import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Video from '../../components/Video';
import { EIcon } from '../../components/EIcon';
import { Stack, Typography } from '@mui/material';

export default {
  title: 'Video/light',
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  theme: 'light',
  autoplay: true,
  title: 'Nam eget dui. Etiam rhoncus Maecenas tempus',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
};

export const Reverse = Template.bind({});
Reverse.args = {
  theme: 'light',
  reverse: true,
  autoplay: true,
  title: 'Nam eget dui. Etiam rhoncus Maecenas tempus',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
};

export const Full = Template.bind({});
Full.args = {
  theme: 'light',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: true,
  full: true,
  loop: true,
};

export const Error = Template.bind({});
Error.args = {
  theme: 'light',
  full: true,
  fallback: (
    <Stack textAlign="center">
      <EIcon icon="ErrorOutline" />
      <Typography variant="h6">
        Spiacenti il video non è disponibile in questo momento
      </Typography>
    </Stack>
  ),
};
