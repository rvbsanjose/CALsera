import moment from 'moment';
import Immutable from 'immutable';
import dayRecord from '../records/day';
import weeksEnums from '../enums/weeks';

function makeInitialState() {
    let weekNum = moment().week();

    return Immutable.Map({
        [ `week${weekNum}` ]: Immutable.List(addWeek(null, { weekNum }))
    });
}

function addWeek(state, action) {
    let week = action.weekNum;

    if (week <= 0) {
        week = 52;
    } else if (week >= 52) {
        week = 1;
    }

    let endOfWeek = moment().week(week).endOf('week'),
        startOfWeek = moment().week(week).startOf('week');

    let days = [],
        day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(dayRecord({
            day: day.format('MMM DD, YYYY (dddd)')
        }));

        day = day.clone().add(1, 'd');
    }

    if (!state) {
        return days;
    }

    return state.set(`week${startOfWeek.week()}`, Immutable.List(days));
}

export default (state = makeInitialState(), action) => {
    switch (action.type) {
        case weeksEnums.ADD_WEEK:
            return addWeek(state, action);
        default:
            return state;
    }
}
