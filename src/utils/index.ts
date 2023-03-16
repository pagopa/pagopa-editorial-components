import React from 'react';
import { type Generic } from 'types/components';

/**
 * this function utility can be used to verify
 * if component's props is a JSX to render
 */
export const isJSX = <T>(arg: T | Generic): arg is Generic =>
  React.isValidElement(arg);
