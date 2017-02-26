import weeksEnums from '../enums/weeks';
import errorEnums from '../enums/errors';
import config from '../../config/notifications';
import * as notificationsActions from '../actions/notifications';

export function removeCourseFromWeek(course = {}) {
    return {
        type: weeksEnums.REMOVE_COURSE_FROM_WEEK,
        course
    };
}

export function addCourseToWeeks(course = {}) {
    if (!course ||
        !course.name ||
        !course.dayIndex ||
        !course.timeIndex ||
        !course.hasOwnProperty('id')) {
        throw Error('Can\'t add course without valid course options.');
    }

    return (dispatch, getState) => {
        let state = getState(),
            activeWeek = state.calendar.getIn([ 'active', 'week' ]),
            week = state.weeks.get(`week-${activeWeek}`),
            enrolled = week.filter(c => c.courses.size);

        if (enrolled && enrolled.size) {
            for (let i = 0; i < enrolled.size; i++) {
                let courses = enrolled.getIn([ i, 'courses' ]),
                    courseKeys = courses.keySeq().toArray();

                for (let j = 0; j < courseKeys.length; j++) {
                    let enrolledCourse = courses.get(courseKeys[ j ]);

                    if (hasTimeConflict(course, enrolledCourse)) {
                        return displayNotification(
                            dispatch,
                            course,
                            enrolledCourse
                        );
                    }
                }
            }
        }

        dispatch({
            type: weeksEnums.ADD_COURSE_TO_WEEK,
            course
        });
    };
}

function endTimeGreater(endTime, startTime) {
    return endTime > startTime;
}

function courseHasDayConflict(course, enrolledCourse) {
    for (let i = 0; i < course.size; i++) {
        if (enrolledCourse.includes(course.get(i))) {
            return true;
        }
    }
}

function hasTimeConflict(course, enrolledCourse) {
    if (endTimeGreater(course.timeIndex.get(1), enrolledCourse.timeIndex.get(0)) &&
        endTimeGreater(enrolledCourse.timeIndex.get(1), course.timeIndex.get(0)) &&
        courseHasDayConflict(course.dayIndex, enrolledCourse.dayIndex)) {
        return true;
    }
}

function displayNotification(dispatch, course, enrolledCourse) {
    let errorId = `error${course.id}-${enrolledCourse.id}`;

    return dispatch(notificationsActions.displayNotification({
        id: errorId,
        notificationType: errorEnums.ERROR,
        message: config.TIME_CONFLICT(course.name, enrolledCourse.name)
    }));
}
