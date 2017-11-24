import React from 'react';
import { shallow } from 'enzyme';
import KeyChords from 'components\KeyChords.js';

describe('<KeyChords />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<KeyChords />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "keychords-component"', function () {
      expect(component.hasClass('keychords-component')).to.equal(true);
    });
  });
});
