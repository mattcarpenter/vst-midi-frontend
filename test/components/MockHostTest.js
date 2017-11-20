import React from 'react';
import { shallow } from 'enzyme';
import MockHost from 'components/MockHost.js';

describe('<MockHost />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MockHost />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "mockhost-component"', function () {
      expect(component.hasClass('mockhost-component')).to.equal(true);
    });
  });
});
