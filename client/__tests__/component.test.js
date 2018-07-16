import React from 'react'
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppNav from '../src/components/AppNav';

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

describe('<AppNav />',()=>
{
  const {enzymeWrapper} = setup();
  it('should render correctly', ()=>
  {
    expect(enzymeWrapper.find('div')).toHaveLength(1);
  });
  it('should render a navbar', () =>
  {
    expect(enzymeWrapper.find('nav')).not.toBe({});
  });
});
