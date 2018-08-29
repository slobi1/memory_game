import React from 'react';
import { mount, configure } from 'enzyme';
import CardComponent from './CardComponent';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CardComponent', () => {
  describe('on render', () => {
    it('should have all props rendered', () => {
      const wrapper = mount(
        <CardComponent
          symbol={'fa-truck-monster'}
          xlocation={'2'}
          ylocation={'2'}
          uniquekey={'1234'}
        />
      );
      expect(wrapper.html()).toEqual("<li class=\"   \" xlocation=\"2\" ylocation=\"2\" uniquekey=\"1234\"><i class=\"fas fa-truck-monster\"></i></li>");
      wrapper.unmount();
    });
  });
});