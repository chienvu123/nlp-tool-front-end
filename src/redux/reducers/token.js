/* eslint-disable no-console */
import { CHANGE_START_INDEX, CHANGE_END_INDEX } from '../actions/token';

const initialState = {
  startIndex: null,
  endIndex: null,
};

export default function sentence(oldState = initialState, action) {
  switch (action.type) {
    case CHANGE_START_INDEX: {
      return {
        ...oldState,
        ...{ startIndex: action.data },
      };
    }
    case CHANGE_END_INDEX: {
      return {
        ...oldState,
        ...{ endIndex: action.data },
      };
    }
    default:
      return oldState;
  }
}
