/* eslint-disable no-console */
import {
  SAVE_LIST_ARTICLE,
  CHANGE_COMMENT,
  CHANGE_DOCUMENT_RENDERED,
} from '../actions/article';

const initialState = {
  userId: 10,
  userRoles: [
    {
      name: '04',
      categories: [
        {
          id: 1,
          name: 'Xã hội',
        },
      ],
    },
    {
      name: '03',
      categories: [
        {
          id: 1,
          name: 'Xã hội',
        },
      ],
    },
    {
      name: '02',
      categories: [
        {
          id: 1,
          name: 'Xã hội',
        },
      ],
    },
  ],
  listArticle: [],
  comment: '',
  documentRendered: false,
};

export default function sentence(oldState = initialState, action) {
  switch (action.type) {
    case SAVE_LIST_ARTICLE: {
      return {
        ...oldState,
        ...{ listArticle: action.data },
      };
    }
    case CHANGE_COMMENT: {
      return {
        ...oldState,
        ...{ comment: action.data },
      };
    }
    case CHANGE_DOCUMENT_RENDERED: {
      return {
        ...oldState,
        ...{ documentRendered: action.data },
      };
    }
    default:
      return oldState;
  }
}
