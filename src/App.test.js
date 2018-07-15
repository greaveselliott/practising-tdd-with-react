import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test component...', () => {

  const defaultProps = { title: 'abc' }
  const render = (props) => shallow(<App {...props} />);

  it('should have a title with correct text.', () => {
    
  });
});