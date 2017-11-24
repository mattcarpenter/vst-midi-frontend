import React from 'react';
import { shallow } from 'enzyme';
import ChordEntity from 'components\ChordEntity.js';

describe('<ChordEntity />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ChordEntity />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "chordentity-component"', function () {
      expect(component.hasClass('chordentity-component')).to.equal(true);
    });
  });
});
