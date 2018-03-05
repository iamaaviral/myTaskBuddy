// test('sample',()=>{
//     expect(true).toBe(true);
// })

import React from 'react'
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import App from './components/App';
import SignUp from './components/SignUp';
import Adapter from 'enzyme-adapter-react-16';
// import TestUtils from 'react-addons-test-utils'
// import ReactTestUtils from 'react-dom/test-utils'
configure({ adapter: new Adapter() });

// describe('App component', () => {
//     it('', () => {

//     })
// })

test('App component should render as expected', () => {
        const component = shallow(<SignUp />);
        expect(component.contains('hey!!')).toBe(true);
})
