import * as React from 'react';
const renderer =require('react-test-renderer');
import {StartAndStopButtons} from './StartAndStopButtons';

describe('StartAnsStopbuttons component renders the startandstop correctly', () => {
    it('renders correctly', () => {
      
      const rendered = renderer.create(
        <StartAndStopButtons />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });


    it('should render racetracks', () => {
        const component = renderer.create(<StartAndStopButtons />);
        component.getInstance().startRace();
        expect(component.toJSON()).toMatchSnapshot();
      });
  });
