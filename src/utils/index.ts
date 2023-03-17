import React from 'react';
import { type Generic } from 'types/components';

/**
 * this function utility can be used to verify
 * if component's props is a JSX to render
 */
export const isJSX = <T>(arg: T | Generic): arg is Generic =>
  React.isValidElement(arg);

export const wrapHandleExitAction =
  (
    href: string,
    onClick?: () => void,
    onExit?: (exitAction: () => void) => void
  ) =>
  (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (onExit) {
      onExit(
        onClick ??
          (() => {
            window.location.assign(href);
          })
      );
    } else if (onClick) {
      onClick();
    } else {
      window.location.assign(href);
    }
  };

export const hrefNoOp = 'javascript:void(0)';
