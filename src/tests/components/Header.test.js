import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});