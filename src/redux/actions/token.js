export const CHANGE_START_INDEX = 'TOKEN/CHANGE_START_INDEX';
export const CHANGE_END_INDEX = 'TOKEN/CHANGE_END_INDEX';

export function changeStartIndex(data) {
  return { type: CHANGE_START_INDEX, data };
}

export function changeEndIndex(data) {
  return { type: CHANGE_END_INDEX, data };
}
