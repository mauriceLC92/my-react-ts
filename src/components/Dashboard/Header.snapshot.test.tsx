import * as React from 'react';
const renderer =require('react-test-renderer');
import {Header} from './Header';

describe('Header component renders the header correctly', () => {
  it('renders correctly', () => {
    
    const rendered = renderer.create(
      <Header />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});