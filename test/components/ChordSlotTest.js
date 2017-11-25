import React from 'react';
import { shallow } from 'enzyme';
import ChordSlot from 'components\ChordSlot.js';

describe('<ChordSlot />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ChordSlot />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "chordslot-component"', function () {
      expect(component.hasClass('chordslot-component')).to.equal(true);
    });
  });
});
