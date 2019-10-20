import { normalizedArticles as defaultArticles } from '../fixtures';
import { arrToMap } from '../helpers';
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants';

export default (articlesState = arrToMap(defaultArticles), action) => {
    const { type, payload, randomId } = action;

    switch (type) {
        case DELETE_ARTICLE:
            const tmpState = { ...articlesState };
            delete tmpState[payload.id];
            return tmpState;
        // return articlesState.filter(article => article.id !== payload.id);

        case ADD_COMMENT:
            const article = articlesState[payload.articleId];
            return {
                ...articlesState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId),
                },
            };
    }

    return articlesState;
};
