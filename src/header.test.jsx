import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component...', () => {

  const defaultProps = { title: 'abc' }
  const render = (props) => shallow(<Header {...props} />);

  it('should render header with correct CSS class.', () => {
        const SUT = render();

        expect(SUT.hasClass('header')).toEqual(true);
  });

  it('should render as a h1 tag.', () => {
      const SUT = render();

      expect(SUT.name()).toEqual('h1');
  });

  it('should render with the correct title', () => {
      const SUT = render({ children: 'abc' });
      
      expect(SUT.text()).toEqual('abc');
  });
});
