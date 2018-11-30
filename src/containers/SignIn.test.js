import {SignIn} from "./SignIn";
import {shallow} from "enzyme";
import React from 'react'

describe('SignIn Component', () => {
   let wrapper;
   const mockSignIn = jest.fn();

   beforeEach(() => {
      wrapper = shallow(<SignIn SignIn={mockSignIn}/>)
   });

   it('should pass', () => {

   })
});
