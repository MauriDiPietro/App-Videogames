import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavBar from './NavBar';

configure({ adapter: new Adapter() });

describe('<Nav />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow( < NavBar /> )
    })

    it('Deberia renderizar Dos <NavLink />', () => {
        expect(wrapper.find(NavLink)).toHaveLength(2);
    });
    it('El primer Link debe tener el texto "Home" y cambiar la ruta hacia "/home".', () => {
        
        expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
      
        expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
    });
    it('El segundo Link debe tener el texto "Create Game!" y cambiar la ruta hacia "/creategame"', () => {
        expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/creategame');
        
        expect(wrapper.find(NavLink).at(1).text()).toEqual('Create Game!');
    });
    
})