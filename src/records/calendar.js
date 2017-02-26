import Immutable from 'immutable';

export default (opts = {
    name: null,
    active: {}
}) => {
    return Immutable.Record({
        active: Immutable.Map({
            day: opts.active.day,
            week: opts.active.week
        }),
        name: opts.name || 'Untitled Calendar'
    })();
};
