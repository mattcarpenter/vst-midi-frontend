import React from 'react';
import { shallow } from 'enzyme';
import Scale from 'components\Scale.js';

describe('<Scale />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Scale />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "scale-component"', function () {
      expect(component.hasClass('scale-component')).to.equal(true);
    });
  });
});
