import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component...', () => {

  const defaultProps = { title: 'abc' }
  const render = (props) => shallow(<Header {...props} />);

  it('should have a title with correct text.', () => {
        const SUT = render();

        expect(SUT).toHaveClassName('header');
  });
});