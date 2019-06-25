import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PokePaper } from './pokepaper.component';

configure({ adapter: new Adapter() });

const props = {
  id: 32,
  name: 'ditto',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
};

describe('PokePaper', () => {
  it('return an object', () => {
    const actual = typeof PokePaper;
    const expected = 'object';
    expect(actual).toEqual(expected);
  });

  it('rendering component', () => {
    const wrapper = mount(<PokePaper {...props} />);
    expect(wrapper.length > 0).toEqual(true);
  });

  it('checking props', () => {
    const wrapper = mount(<PokePaper {...props} />);
    const id = wrapper.find('tbody').find('td').at(0);
    const name = wrapper.find('tbody').find('td').at(1);
    const avatar = wrapper.find('img');
    expect(parseInt(id.text(), 10) === props.id).toEqual(true);
    expect(name.text() === props.name).toEqual(true);
    expect(avatar.prop('src') === props.sprite).toEqual(true);
  });

  it('mounting component without props', () => {
    const wrapper = mount(<PokePaper />);
    expect(wrapper.length > 0).toEqual(true);
  });
});