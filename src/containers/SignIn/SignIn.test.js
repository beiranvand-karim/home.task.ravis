import {SignIn} from "./";
import {shallow} from "enzyme";
import React from 'react'
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"

describe('SignIn Component', () => {
   const mockHistory = { push: jest.fn() };

   it('should sign in', () => {
      const wrapper = shallow(<SignIn history={mockHistory}/>);
      wrapper.find('[name="userName"]').simulate('change', {target: {name: 'userName', value: 'admin'}});
      wrapper.find('[name="passWord"]').simulate('change', {target: {name: 'passWord', value: 'admin'}});
      wrapper.find('form').simulate('submit', {preventDefault() {}});
      expect(mockHistory.push.mock.calls[0]).toEqual(['dashBoard'])
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><SignIn/></MemoryRouter>);
      expect(tree).toMatchSnapshot()
   })
});
