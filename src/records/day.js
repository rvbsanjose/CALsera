import Immutable from 'immutable';

export default (obj = {}) => {
    return Immutable.Record({
        day: obj.day,
        courses: Immutable.List([])
    })();
};
