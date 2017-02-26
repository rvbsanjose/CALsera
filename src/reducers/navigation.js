import Immutable from 'immutable';
import navigationEnums from '../enums/navigation';
import navigationRecord from '../records/navigation';

function makeInitialState() {
    return Immutable.Map(navigationRecord());
}

function updateTypeIdx(state, action) {
    return state.set('typeIdx', action.typeIdx);
}

export default (state = makeInitialState(), action) => {
    switch(action.type) {
        case navigationEnums.UPDATE_TYPE_IDX:
            return updateTypeIdx(state, action);
        default:
            return state;
    }
};
