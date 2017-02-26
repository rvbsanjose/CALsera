import Immutable from 'immutable';
import catalog from '../../data/catalog';
import courseRecord from '../records/course';

function makeInitialState() {
    return Immutable.Map().withMutations(map => {
        catalog.courses.forEach(course => {
            map.set(`course-${course.id}`, courseRecord(course));
        });

        return map;
    });
}

export default (state = makeInitialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
}
