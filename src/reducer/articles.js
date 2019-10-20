import { normalizedArticles as defaultArticles } from '../fixtures';
import { arrToMap } from '../helpers';
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants';
import { Map, Record, OrderedMap } from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: undefined,
    id: undefined,
    comments: [],
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({}),
});

const defaultState = new ReducerState();

export default (articlesState = defaultState, action) => {
    const { type, payload, response, randomId } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.id]);

        case ADD_COMMENT:
            return articlesState.updateIn(['entities', payload.articleId, 'comments'], comments =>
                comments.concat(randomId),
            );

        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true);
    }

    return articlesState;
};
