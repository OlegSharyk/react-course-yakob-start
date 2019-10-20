import {
    DELETE_ARTICLE,
    INCREMENT,
    CHANGE_DATE_RANGE,
    CHANGE_SELECTION,
    SET_DATE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    START,
    FAIL,
    SUCCESS,
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

export function loadArticle(id) {
    return dispatch => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id },
        });

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response =>
                    dispatch({
                        type: LOAD_ARTICLE + SUCCESS,
                        payload: { id, response },
                    }),
                )
                .catch(error =>
                    next({
                        type: LOAD_ARTICLE + FAIL,
                        payload: { id, error },
                    }),
                );
        }, 1000);
    };
}

// export function loadArticle(id) {
//     return {
//         type: LOAD_ARTICLE,
//         callAPI: `/api/article/${id}`,
//     };
// }
