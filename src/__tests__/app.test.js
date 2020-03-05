import React from 'react';
import { shallow , mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/counter/counter.js' ;
import Counter from '../components/counter/counter.js';

describe('<Counter/>' , ()=>{
    it('exists at the start of our application',()=>{
      let app = sallow(<Counter />);
      expect(app.find('section').exists().toBeTruthy());  
    });
    it('change the state on click',()=>{
      let app = mount(<Counter />);
      let button = app.find('button');
      button.simulate('click');
      expect(app.state('count')).toBe(1);

    });
    it('renders correctly',()=> {
const rendersTree = renderer.create(<Counter />).toJSON();
expect(rendersTree).toMatchSnapshot();
    })
})