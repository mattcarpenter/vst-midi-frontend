import React from 'react';
import { shallow } from 'enzyme';
import ChordSlotBank from 'components\ChordSlotBank.js';

describe('<ChordSlotBank />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ChordSlotBank />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "chordslotbank-component"', function () {
      expect(component.hasClass('chordslotbank-component')).to.equal(true);
    });
  });
});
