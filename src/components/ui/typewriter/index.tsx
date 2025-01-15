'use client';

import React from 'react';
import { Typewriter, TypewriterProps, CursorProps } from 'react-simple-typewriter';

const defaultOptions: ComponentProps = {
  words: ['Hello, World!', 'Welcome to my site!'], // Add default strings
  loop: true,
  deleteSpeed: 50,
};

type ComponentProps = {
  /** Show / Hide the cursor */
  cursor?: boolean;
} & TypewriterProps &
  CursorProps;

type Props = {
  options?: ComponentProps;
};

const TypewriterWrapper = (props: Props) => <Typewriter {...(props.options || defaultOptions)} />;

export default TypewriterWrapper;
