export const SAVE_USER_INFOR = 'user/SAVE_USER_INFOR';

export function saveUserInfor(data) {
  return { type: SAVE_USER_INFOR, data };
}
