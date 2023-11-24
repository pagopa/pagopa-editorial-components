/* eslint-disable prettier/prettier */
import { Grid, Typography } from '@mui/material';
import Video from './index';
import '@testing-library/jest-dom';
import { EIcon } from '../EIcon';
import 'intersection-observer';

/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard dark', () => {
  const tree = renderer
    .create(
      <Video
        autoplay
        src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        theme="dark"
        title="Nam eget dui. Etiam rhoncus Maecenas tempus"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly reverse dark ', () => {
  const tree = renderer
    .create(
      <Video
        autoplay
        reverse
        src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        theme="dark"
        title="Nam eget dui. Etiam rhoncus Maecenas tempus"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly full dark ', () => {
  const tree = renderer
    .create(
      <Video
        autoplay
        full
        loop
        src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4"
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly error dark ', () => {
  const tree = renderer
    .create(
      <Video
        fallback={
          <Grid textAlign="center">
            <EIcon color="background.paper" icon="ErrorOutline" />
            <Typography color="background.paper" variant="h6">
              Spiacenti il video non è disponibile in questo momento
            </Typography>
          </Grid>
        }
        full
        theme="dark"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
