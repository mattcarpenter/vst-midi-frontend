import React from 'react';
import { shallow } from 'enzyme';
import Key from 'components\Key.js';

describe('<Key />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Key />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "key-component"', function () {
      expect(component.hasClass('key-component')).to.equal(true);
    });
  });
});
