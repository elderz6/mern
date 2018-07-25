import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppNav from '../src/components/AppNav';
import toJSON from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});
function setup()
{
  const props =
  {
    state:{isOpen:false},
    toggle:jest.fn()
  };
  const enzymeWrapper = shallow(<AppNav {...props}/>);

  return{
    props,
    enzymeWrapper
  }
}

describe('Components with snapshot test', ()=>
{
  const {enzymeWrapper} = setup()
  it('should render correctly', ()=>
  {
    expect(toJSON(enzymeWrapper)).toMatchSnapshot();
    // console.log(toJSON(enzymeWrapper));
    
  });
});
