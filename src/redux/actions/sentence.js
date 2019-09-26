export const ADD_HIGHLIGHT = 'sentence/ADD_HIGHLIGHT';
export const REMOVE_HIGHLIGHTED = 'sentence/REMOVE_HIGHLIGHTED';
export const CHANGE_RL_SOURCE = 'sentence/CHANGE_RL_SOURCE';
export const CHANGE_RL_TARGET = 'sentence/CHANGE_RL_TARGET';
export const CHANGE_RL_SELECTING = 'sentence/CHANGE_RL_SELECTING';
export const CHANGE_RL_TYPE = 'sentence/CHANGE_RL_TYPE';
export const ADD_RELATION = 'sentence/ADD_RELATION';
export const REMOVE_RELATION = 'sentence/REMOVE_RELATION';
export const SAVE_SENTENCES = 'sentence/SAVE_SENTENCES';
export const REMOVE_RELATION_EASY = 'sentence/REMOVE_RELATION_EASY';
export const SAVE_LIST_ENTITY = 'sentence/SAVE_LIST_ENTITY';
export const SAVE_LIST_RELATION = 'sentence/SAVE_LIST_RELATION';
export const EDIT_LABEL = 'sentence/EDIT_LABEL';
export const EDIT_RELATION = 'sentence/EDIT_RELATION';
export const EXCHANGE_IN_RELATION = 'sentence/EXCHANGE_IN_RELATION';
export const SAVE_PROCESS = 'sentence/SAVE_PROCESS';
export const CHANGE_FAILED = 'sentence/CHANGE_FAILED';
export const CHANGE_TOKENS = 'sentence/GROUP_TOKEN';

export function articleClick() {
  return { type: 'ARTICLE_CLICK' };
}

export function addHighlight(data) {
  return { type: ADD_HIGHLIGHT, data };
}

export function removeHighlight(data) {
  return { type: REMOVE_HIGHLIGHTED, data };
}

export function changeRlSource(rlSource) {
  return { type: CHANGE_RL_SOURCE, rlSource };
}

export function changeRlTarget(rlTarget) {
  return { type: CHANGE_RL_TARGET, rlTarget };
}

export function changeRlSelecting(rlSelecting) {
  return { type: CHANGE_RL_SELECTING, rlSelecting };
}

export function changeRlType(rlType) {
  return { type: CHANGE_RL_TYPE, rlType };
}

export function addRelation(data) {
  return { type: ADD_RELATION, data };
}

export function removeRelation(data) {
  return { type: REMOVE_RELATION, data };
}

export function saveSentences(data) {
  return { type: SAVE_SENTENCES, data };
}

export function removeRelationEasy(data) {
  return { type: REMOVE_RELATION_EASY, data };
}

export function saveListEntity(data) {
  return { type: SAVE_LIST_ENTITY, data };
}

export function saveListRelation(data) {
  return { type: SAVE_LIST_RELATION, data };
}

export function editLabel(data) {
  return { type: EDIT_LABEL, data };
}

export function editRelation(data) {
  return { type: EDIT_RELATION, data };
}

export function exchangeInRelation(data) {
  return { type: EXCHANGE_IN_RELATION, data };
}

export function saveProcess(data) {
  return { type: SAVE_PROCESS, data };
}
export function chageFailed(data) {
  return { type: CHANGE_FAILED, data };
}

export function changeTokens(data) {
  return { type: CHANGE_TOKENS, data };
}
