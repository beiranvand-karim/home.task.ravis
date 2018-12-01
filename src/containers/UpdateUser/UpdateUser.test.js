import {shallow} from "enzyme"
import React from 'react'
import renderer from 'react-test-renderer'
import {MemoryRouter} from "react-router-dom"
import {UpdateUser} from "./"

describe('UpdateUser Component' ,() => {
   const mockMatch = {params: jest.fn()};
   const mockReadUser = jest.fn();
   const mockUpdateUser = jest.fn();
   const mockHistory = {push: jest.fn()};

   const user = {
      name: 'somevalue',
      family: 'somevalue',
      nickName: 'somevalue',
      phoneNumber: 'somevalue',
      email: 'somevalue',
      community: 'somevalue',
      birthDay: 'somevalue',
      gender: 'somevalue'
   };

   it('should read user after component mount', () => {
      const wrapper = shallow(
         <UpdateUser history={mockHistory} updateUser={mockUpdateUser} readUser={mockReadUser} match={mockMatch} selectedUser={user}/>
      );
      wrapper.instance().componentDidMount();
      expect(mockReadUser.mock.calls.length).toEqual(2)
   });

   it('should update the user', () => {
      const wrapper = shallow(
         <UpdateUser history={mockHistory} updateUser={mockUpdateUser} readUser={mockReadUser} match={mockMatch} selectedUser={user}/>
            );
      wrapper.find('form').simulate('submit', {preventDefault() {}});
      expect(mockUpdateUser.mock.calls.length).toBe(1);
      expect(mockHistory.push.mock.calls[0]).toEqual(['/dashBoard'])
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(
         <MemoryRouter>
            <UpdateUser readUser={mockReadUser} match={mockMatch} selectedUser={user}/>
         </MemoryRouter>
      );
      expect(tree).toMatchSnapshot()
   })
});
