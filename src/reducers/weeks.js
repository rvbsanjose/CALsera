import moment from 'moment';
import Immutable from 'immutable';
import dayRecord from '../records/day';
import weeksEnums from '../enums/weeks';

function makeInitialState() {
    return Immutable.Map().withMutations(map => {
        for (var i = 1; i < 53; i++) {
            let endOfWeek = moment().week(i).endOf('week'),
                startOfWeek = moment().week(i).startOf('week');

            let days = [],
                day = startOfWeek;

            while (day <= endOfWeek) {
                days.push(dayRecord({
                    day: day.format('MMM DD, YYYY (dddd)')
                }));

                day = day.clone().add(1, 'd');
            }

            map.set(`week-${i}`, Immutable.List(days));
        }
    });
}

function removeCourseFromWeek(state, action) {
    let course = action.course,
        updatedWeeks = state.withMutations(weeks => {
            weeks.forEach((week, weeksKey) => {
                course.dayIndex.forEach(idx => {
                    let path = [ weeksKey, idx, 'courses' ],
                        courses = weeks.getIn(path);

                    weeks.setIn(
                        path,
                        courses.delete(`course-${course.id}`)
                    );
                });
            });
    });

    return Immutable.Map(updatedWeeks);
}

function addCourseToWeek(state, action) {
    let course = action.course,
        updatedWeeks = state.withMutations(weeks => {
            weeks.forEach((week, weeksKey) => {
                course.dayIndex.forEach(idx => {
                    let path = [ weeksKey, idx, 'courses' ],
                        courses = weeks.getIn(path);

                    weeks.setIn(
                        path,
                        courses.set(`course-${course.id}`, course)
                    );
                });
            });
    });

    return Immutable.Map(updatedWeeks);
}

export default (state = makeInitialState(), action) => {
    switch (action.type) {
        case weeksEnums.ADD_COURSE_TO_WEEK:
            return addCourseToWeek(state, action);
        case weeksEnums.REMOVE_COURSE_FROM_WEEK:
            return removeCourseFromWeek(state, action);
        default:
            return state;
    }
}
