import React from 'react'
import {shallow} from "enzyme"
import renderer from 'react-test-renderer'
import {MemoryRouter} from 'react-router-dom'
import {UserList} from "./"

describe('UserList Component', () => {
   const mockDeleteUser = jest.fn();
   const mockHistory = { push: jest.fn() };
   const users = [
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
   ];

   it('should call delete user', () => {
      const wrapper = shallow(<UserList users={users} deleteUser={mockDeleteUser}/>);
      wrapper.find('.deleteUser').simulate('click');
      expect(mockDeleteUser.mock.calls.length).toEqual(1)
   });

   it('should push to history', () => {
      const wrapper = shallow(<UserList users={users} history={mockHistory}/>);
      wrapper.find('.pushHistory').simulate('click');
      expect(mockHistory.push.mock.calls[0]).toEqual([`/updateUser/${0}`])
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><UserList users={users}/></MemoryRouter>);
      expect(tree).toMatchSnapshot()
   })
});
