import { normalizedArticles as defaultArticles } from '../fixtures';
import { arrToMap } from '../helpers';
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants';
import { Map, Record } from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: undefined,
    id: undefined,
    comments: [],
});

const defaultState = new Map({});

export default (articlesState = defaultState, action) => {
    const { type, payload, response, randomId } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.delete(payload.id);
        // return articlesState.filter(article => article.id !== payload.id);

        case ADD_COMMENT:
            return articleState.updateIn([payload.articleId, 'comments'], comments =>
                comments.concat(randomId),
            );

        // const article = articlesState[payload.articleId];
        // return {
        //     ...articlesState,
        //     [payload.articleId]: {
        //         ...article,
        //         comments: (article.comments || []).concat(randomId),
        //     },
        // };

        case LOAD_ALL_ARTICLES:
            return arrToMap(response, ArticleRecord);
    }

    return articlesState;
};
