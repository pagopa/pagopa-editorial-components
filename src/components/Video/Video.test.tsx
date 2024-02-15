/* eslint-disable prettier/prettier */
import { Grid, Typography } from '@mui/material';
import Video from './index';
import '@testing-library/jest-dom';
import { EIcon } from '../EIcon';
import 'intersection-observer';
import * as Utils from '../../utils/index';

/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import React from 'react';

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

it('autplays the video if autoplay is set to true and isVisible is changed', () => {
  const useIsVisibleMock = jest.spyOn(Utils, 'useIsVisible');
  useIsVisibleMock.mockReturnValue(true);
  jest.spyOn(React, 'useEffect');
  const playMock = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(jest.fn());

  render(
    <Video
      autoplay
      src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4"
      subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      theme="dark"
      title="Nam eget dui. Etiam rhoncus Maecenas tempus"
    />
  );

  expect(React.useEffect).toHaveBeenCalledTimes(1);
  expect(playMock).toHaveBeenCalledTimes(1);
});

it('does not autplay the video if autoplay is set to true and isVisible is changed to false', () => {
  const useIsVisibleMock = jest.spyOn(Utils, 'useIsVisible');
  useIsVisibleMock.mockReturnValue(false);
  jest.spyOn(React, 'useEffect');
  const playMock = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(jest.fn());

  render(
    <Video
      autoplay
      src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4"
      subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      theme="dark"
      title="Nam eget dui. Etiam rhoncus Maecenas tempus"
    />
  );
  expect(React.useEffect).toHaveBeenCalledTimes(1);
  expect(playMock).toHaveBeenCalledTimes(0);
});
