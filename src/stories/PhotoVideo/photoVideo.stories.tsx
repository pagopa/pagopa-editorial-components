import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import PhotoVideo from '../../components/PhotoVideo';
import image from '../assets/hero_background.jpg';

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
  autoPlay: true,
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
  src: 'https://www.youtube.com/embed/YxpWC1Vq4to',
  autoPlay: true,
};
