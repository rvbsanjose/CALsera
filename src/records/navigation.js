import Immutable from 'immutable';

export default (opts = {
    typeIdx: 1
}) => {
    return Immutable.Record({
        typeIdx: opts.typeIdx,
        types: Immutable.List([ 'calendar', 'courses' ])
    })();
};
