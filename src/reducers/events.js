import Immutable from 'immutable';

function makeInitialState() {
    return Immutable.Map({});
}

export default (state = makeInitialState(), action) => {
    switch(action.type) {
        default:
            return state;
    }
};
