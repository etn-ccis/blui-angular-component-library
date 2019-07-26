import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ChannelValue } from '.';

describe('ChannelValue', () => {
  it('works', () => {
    expect(true).toBe(true);
  });

  it('renders', () => {
    const x: number = 4;
    const renderer = TestRenderer.create(
      <ChannelValue value={123} />
    );

    expect(renderer.toJSON()).toBeFalsy();
  });
});