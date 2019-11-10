import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;
const commentsGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;

export const filtrateArticlesSelector = createSelector(
    articlesGetter,
    filtersGetter,
    (articles, filters) => {
        const {
            selected,
            dateRange: { from, to },
        } = filters;

        // console.log('update filters');

        return mapToArr(articles).filter(article => {
            const published = Date.parse(article.date);
            return (
                (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
            );
        });
    },
);

export const commentSelectorFactory = () =>
    createSelector(
        commentsGetter,
        idGetter,
        (comments, id) => {
            // console.log('getting comments');
            return comments.get(id);
        },
    );
