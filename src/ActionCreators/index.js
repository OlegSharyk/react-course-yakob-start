import {
    DELETE_ARTICLE,
    INCREMENT,
    CHANGE_DATE_RANGE,
    CHANGE_SELECTION,
    SET_DATE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
} from '../constants';

export function increment() {
    return {
        type: INCREMENT,
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id },
    };
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected },
    };
}

export function changeDateRange(date) {
    return {
        type: SET_DATE,
        payload: { date },
    };
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true,
    };
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article',
    };
}
