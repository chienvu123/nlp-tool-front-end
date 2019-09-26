export const SAVE_LIST_ARTICLE = 'article/SAVE_LIST_ARTICLE';
export const CHANGE_COMMENT = 'article/CHANGE_COMMENT';
export const CHANGE_DOCUMENT_RENDERED = 'article/CHANGE_DOCUMENT_RENDERED';

export function saveListArticle(data) {
  return { type: SAVE_LIST_ARTICLE, data };
}

export function changeComment(data) {
  return { type: CHANGE_COMMENT, data };
}

export function changeDocumentRendered(data) {
  return { type: CHANGE_DOCUMENT_RENDERED, data };
}
