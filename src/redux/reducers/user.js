/* eslint-disable no-console */
import { SAVE_USER_INFOR } from '../actions/user';

const initialState = {
  userId: null,
  userRoles: [],
  userName: '',
  email: '',
  groups: [],
};

export default function sentence(oldState = initialState, action) {
  switch (action.type) {
    case SAVE_USER_INFOR: {
      if (!action.data) {
        return oldState;
      }
      return {
        ...oldState,
        userId: action.data.id,
        userRoles: action.data.roles,
        userName: action.data.name,
        email: action.data.email,
        groups: action.data.group_ids,
      };
    }
    default:
      return oldState;
  }
}
