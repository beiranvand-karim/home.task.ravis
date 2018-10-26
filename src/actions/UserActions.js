
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const READ_USERS = 'READ_USERS';

export const createUser = (user) => {
  return {
      type: CREATE_USER,
      payload: user
  }
};

export const deleteUser = (index) => {
    return {
        type: DELETE_USER,
        payload: index
    }
};

export const readUsers = () => {
    return {
        type: READ_USERS
    }
};

export const updateUser = (index, user) => {
    return {
        type: UPDATE_USER,
        payload: user,
        index: index
    }
};
