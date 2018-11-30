import App from './App'
import {MemoryRouter} from "react-router-dom";
import {mount} from "enzyme";
import SignIn from "./containers/SignIn";
import DashBoard from "./containers/DashBoard";
import React from 'react'

describe('App', () => {

   it('should navigate to sign in page', () => {
      const wrapper = mount(
         <MemoryRouter initialEntries={['/signIn']}>
            <App/>
         </MemoryRouter>
      );
      expect(wrapper.find(SignIn)).toHaveLength(1);
      expect(wrapper.find(DashBoard)).toHaveLength(0);
   })

});
