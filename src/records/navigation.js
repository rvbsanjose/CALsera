import Immutable from 'immutable';
import navigationEnums from '../enums/navigation';

export default (opts = {
    typeIdx: 1
}) => {
    return Immutable.Record({
        typeIdx: opts.typeIdx,
        types: Immutable.List([
            navigationEnums.CALENDAR,
            navigationEnums.COURSES
        ])
    })();
};
