import { combineReducers } from 'redux';

import sentence from './sentence';
import article from './article';
import token from './token';
import user from './user';

const rootReducer = combineReducers({ sentence, article, token, user });

export default rootReducer;
