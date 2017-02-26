import Immutable from 'immutable';

export default (opts = {}) => {
    return Immutable.Record({
        id: opts.id,
        name: opts.name,
        author: opts.author,
        description: opts.description,
        time: Immutable.List(opts.time),
        days: Immutable.List(opts.days),
        dayIndex: Immutable.List(opts.dayIndex),
        timeIndex: Immutable.List(opts.timeIndex)
    })();
};
