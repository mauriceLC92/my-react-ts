import * as React from 'react';
import {HorseCardListEmpty} from '../HorseCard/HorseCardListEmpty';
import renderer from 'react-test-renderer';


describe('HorsecardList renders this component correctly', () => {
    it('renders correctly', () => {
      const rendered = renderer.create(
        <HorseCardListEmpty />
      );
  
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });