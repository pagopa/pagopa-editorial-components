import { type ComponentMeta } from '@storybook/react';
import Feature from '../components/Feature/Feature';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Feature',
  component: Feature,
} as ComponentMeta<typeof Feature>;

export const FeatureComponent = () => <Feature></Feature>;
