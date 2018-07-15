import React from 'react';
import { shallow } from 'enzyme';
import Form from './form';

describe('Form component...', () => {
    const render = (props) => shallow(<Form {...props} />);

    it('should render a form element.', () => {
        const SUT = render();

        expect(SUT.name()).toEqual('form');

    });
});