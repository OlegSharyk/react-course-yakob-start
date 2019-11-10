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
    LOAD_ARTICLE_COMMENTS,
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

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`,
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
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then(response =>
                    dispatch({
                        type: LOAD_ARTICLE + SUCCESS,
                        payload: { id, response },
                    }),
                )
                .catch(error => {
                    dispatch({
                        type: LOAD_ARTICLE + FAIL,
                        payload: { id, error },
                    });
                });
        }, 500);
    };
}

export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const {
            comments: { pagination },
        } = getState();
        if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return;

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: { page },
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`,
        });
    };
}

// export function loadArticle(id) {
//     return {
//         type: LOAD_ARTICLE,
//         callAPI: `/api/article/${id}`,
//     };
// }
