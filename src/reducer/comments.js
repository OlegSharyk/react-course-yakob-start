import { normalizedComments as defaultComments } from '../fixtures';
import { arrToMap } from '../helpers';
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_ARTICLE } from '../constants';
import { OrderedMap, Record } from 'immutable';

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
});

const ReducerState = Record({
    entities: new OrderedMap({}),
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const { type, payload, randomId } = action;

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(
                ['entities', randomId],
                new CommentRecord({ ...payload.comment, id: randomId }),
            );

        case LOAD_ARTICLE + SUCCESS:
            return commentsState.update('entities', entities =>
                entities.merge(arrToMap(response, CommentRecord)),
            );
    }

    return commentsState;
};
