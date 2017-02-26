import weeksEnums from '../enums/weeks';

export function addWeek(week) {
    return {
        type: weeksEnums.ADD_WEEK,
        weekNum: week
    };
}
