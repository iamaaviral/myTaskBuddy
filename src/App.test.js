// test('sample',()=>{
//     expect(true).toBe(true);
// })

import React from 'react'
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import App from './components/App';
import Adapter from 'enzyme-adapter-react-16';
// import TestUtils from 'react-addons-test-utils'
// import ReactTestUtils from 'react-dom/test-utils'
configure({ adapter: new Adapter() });

// describe('App component', () => {
//     it('', () => {

//     })
// })

test('App component should render as expected', () => {
        const component = shallow(<App />).dive();
        console.log(component);
})
