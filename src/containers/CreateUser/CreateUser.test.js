import React from 'react'
import {shallow} from "enzyme"
import {CreateUser} from "./"
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'


describe('CreateUser Component', () => {

   const mockCreateUser = jest.fn();

   it('should call create user', () => {
      const wrapper = shallow(<CreateUser createUser={mockCreateUser}/>);
      wrapper.find('form').simulate('submit', {preventDefault() {}});
      expect(mockCreateUser.mock.calls.length).toBe(1)
   });

   it('should be called with user features', () => {
      const wrapper = shallow(<CreateUser createUser={mockCreateUser}/>);
      wrapper.find('[name="name"]').simulate('change', {target: {name: 'name', value: 'somevalue'}});
      wrapper.find('[name="family"]').simulate('change', {target: {name: 'family', value: 'somevalue'}});
      wrapper.find('[name="nickName"]').simulate('change', {target: {name: 'nickName', value: 'somevalue'}});
      wrapper.find('[name="phoneNumber"]').simulate('change', {target : {name: 'phoneNumber', value: 'somevalue'}});
      wrapper.find('[name="email"]').simulate('change', {target: {name: 'email', value: 'somevalue'}});
      wrapper.find('[name="community"]').simulate('change', {target: {name: 'community', value: 'somevalue'}});
      wrapper.find('[name="birthDay"]').simulate('change', {target: {name: 'birthDay', value: 'somevalue'}});
      wrapper.find('[name="gender"]').simulate('change', {target: {name: 'gender', value: 'somevalue'}});

      wrapper.find('form').simulate('submit', {preventDefault() {}});

      expect(mockCreateUser.mock.calls[1][0]).toEqual(
         {
            name: 'somevalue',
            family: 'somevalue',
            nickName: 'somevalue',
            phoneNumber: 'somevalue',
            email: 'somevalue',
            community: 'somevalue',
            birthDay: 'somevalue',
            gender: 'somevalue'
         }
      )
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><CreateUser/></MemoryRouter>);
      expect(tree).toMatchSnapshot()
   })
});
