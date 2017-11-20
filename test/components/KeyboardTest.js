import React from 'react';
import { shallow } from 'enzyme';
import Keyboard from 'components/Keyboard.js';

describe('<Keyboard />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Keyboard />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "keyboard-component"', function () {
      expect(component.hasClass('keyboard-component')).to.equal(true);
    });
  });
});
