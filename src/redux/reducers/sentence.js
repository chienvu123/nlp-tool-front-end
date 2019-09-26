/* eslint-disable no-console */
import {
  ADD_HIGHLIGHT,
  REMOVE_HIGHLIGHTED,
  CHANGE_RL_SOURCE,
  CHANGE_RL_TARGET,
  CHANGE_RL_SELECTING,
  ADD_RELATION,
  CHANGE_RL_TYPE,
  SAVE_SENTENCES,
  REMOVE_RELATION,
  REMOVE_RELATION_EASY,
  SAVE_LIST_ENTITY,
  SAVE_LIST_RELATION,
  EDIT_LABEL,
  EDIT_RELATION,
  EXCHANGE_IN_RELATION,
  SAVE_PROCESS,
  CHANGE_FAILED,
  CHANGE_TOKENS,
} from '../actions/sentence';

const initialState = {
  label: '',
  rlSource: {},
  rlTarget: {},
  rlType: '',
  rlSelecting: '',
  sentences: [],
  paragraph: {},
  listEntity: [],
  listRelation: [],
  process: [],
  articleClick: false,
};

export default function sentence(oldState = initialState, action) {
  switch (action.type) {
    case 'ARTICLE_CLICK': {
      return {
        ...oldState,
        articleClick: !oldState.articleClick,
      };
    }
    case ADD_HIGHLIGHT: {
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    entities: [...el.entities, action.data.range],
                  },
                }
              : el,
          ),
        },
      };
    }
    case EDIT_LABEL: {
      // console.log('action', action);
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    entities: el.entities.map(val =>
                      val.id === action.data.id
                        ? { ...val, ne: action.data.label }
                        : val,
                    ),
                  },
                }
              : el,
          ),
        },
      };
    }
    case ADD_RELATION:
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    relations: [...el.relations, action.data.relation],
                  },
                }
              : el,
          ),
        },
      };
    case EDIT_RELATION: {
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    relations: el.relations.map(val =>
                      val.rl_source === action.data.rl_source &&
                      val.rl_target === action.data.rl_target
                        ? { ...val, rl_type: action.data.rl_type }
                        : val,
                    ),
                  },
                }
              : el,
          ),
        },
      };
    }
    case CHANGE_FAILED: {
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    failed: action.data.failed,
                  },
                }
              : el,
          ),
        },
      };
    }
    case REMOVE_HIGHLIGHTED:
      // console.log(action);
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    entities: el.entities.filter(
                      entry => entry.id !== action.data.id,
                    ),
                  },
                }
              : el,
          ),
        },
      };
    case REMOVE_RELATION:
      // console.log(action.data);
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    relations: el.relations.filter(entry => {
                      const x = entry.rl_source !== action.data.rl_source;
                      const y = entry.rl_target !== action.data.rl_target;
                      return x || y;
                    }),
                  },
                }
              : el,
          ),
        },
      };
    case REMOVE_RELATION_EASY:
      // console.log(action.data);
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    relations: el.relations.filter(entry => {
                      const x = entry.rl_source !== action.data.id;
                      const y = entry.rl_target !== action.data.id;
                      return x && y;
                    }),
                  },
                }
              : el,
          ),
        },
      };
    case EXCHANGE_IN_RELATION:
      // console.log('action', action);
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    relations: el.relations.map(val =>
                      val.rl_source === action.data.rl_source &&
                      val.rl_target === action.data.rl_target
                        ? {
                            ...val,
                            rl_source: action.data.rl_target,
                            rl_target: action.data.rl_source,
                          }
                        : val,
                    ),
                  },
                }
              : el,
          ),
        },
      };
    case CHANGE_RL_SOURCE:
      return {
        ...oldState,
        ...{ rlSource: { ...action.rlSource } },
      };
    case CHANGE_RL_TARGET:
      return {
        ...oldState,
        ...{ rlTarget: { ...action.rlTarget } },
      };
    case CHANGE_RL_SELECTING:
      return {
        ...oldState,
        ...{ rlSelecting: action.rlSelecting },
      };
    case CHANGE_RL_TYPE:
      return {
        ...oldState,
        ...{ rlType: action.rlType },
      };
    case SAVE_SENTENCES:
      return {
        ...oldState,
        ...{ sentences: action.data },
      };
    case SAVE_LIST_ENTITY:
      return {
        ...oldState,
        ...{ listEntity: action.data },
      };
    case SAVE_LIST_RELATION:
      return {
        ...oldState,
        ...{ listRelation: action.data },
      };
    case SAVE_PROCESS:
      return {
        ...oldState,
        ...{ process: action.data },
      };
    case CHANGE_TOKENS:
      return {
        ...oldState,
        ...{
          sentences: oldState.sentences.map(el =>
            el.id === action.data.sentenceId
              ? {
                  ...el,
                  ...{
                    tokens: action.data.tokens,
                    relations: [],
                    entities: [],
                  },
                }
              : el,
          ),
        },
      };
    default:
      return oldState;
  }
}
