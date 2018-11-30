import {CREATE_USER, DELETE_USER, READ_USER, READ_USERS, UPDATE_USER} from "../actions/UserActions";

const initialState = {
   users: [],
   selectedUser: null
};

export default function UsersReducer(state = initialState, action) {
   let users = Object.assign([], state.users);
   switch (action.type) {
      case CREATE_USER:
         users.push(action.payload);
         return {
            ...state,
            users
         };
      case DELETE_USER:
         users.splice(action.payload, 1);
         return {
            ...state,
            users
         };
      case READ_USERS:
         return state;
      case UPDATE_USER:
         users.splice(action.index, 1, action.payload);
         return {
            ...state,
            users
         };
      case READ_USER:
         const selectedUser = users[action.payload];
         return {
            ...state,
            selectedUser
         };
      default:
         return state;
   }
}
