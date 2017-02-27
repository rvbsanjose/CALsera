## What is CALsera?
> CALsera is a take home assignment for Coursera which was developed part time
over a course of 2 - 3 days.

## What does CALsera do?
> CALsera is a way to track your weekly schedule, showing what potential schedule conflicts you would have if you enrolled in Coursera courses.

## Is there a sprint board?
Yes. You can find the ongoing sprint board at https://github.com/rvbsanjose/CALsera/projects/1. It is meant to mimick a Jira board of tickets (Github issues) moving from left to right, TODO -> In Progress -> Ready for Code Review -> Done.

## Prerequisites
1. npm must be installed on your computer. CALsera was developed using npm version 3.10.3
and Google Chrome version 56.0.2924.87 (64-bit).

## How to deploy locally
1. npm install
2. npm start
3. Navigate to localhost:8080


## How is the Redux state container modeled
```
{
    calendar: Immutable.Record({
        active: Immutable.Map({
            day: 1,
            week: 9
        }),
        name: 'untitled calendar'
    }),
    courses: Immutable.Record({
        'course-0': Immutable.Record({
            author: 'John Doe',
            dayIndex: Immutable.List([ 2, 4 ]),
            days: Immutable.List([ 'Tuesday', 'Thursday' ]),
            description: 'Lorem ipsum text',
            id: 0,
            name: 'Introduction to Basket Weaving',
            time: Immutable.List([ '1pm', '3pm' ]),
            timeIndex: Immutable.List([ 13, 15 ])
        })
    }),
    navigation: Immutable.Map(Immutable.Record({
        typeIdx: 1,
        types: Immutable.List([ 'COURSES', 'CALENDAR' ])
    })),
    notifications: Immutable.Map({
        id: 'error3-5',
        message: 'Message text',
        notificationType: 'ERROR'
    }),
    weeks: Immutable.Map({
        'week-1': Immutable.List([
            Immutable.Record({
                day: 'Jan 01, 2017 (Sunday)',
                courses: Immutable.Map()
            }),
            Immutable.Record({
                day: 'Jan 02, 2017 (Monday)',
                courses: Immutable.Map()
            }),
            Immutable.Record({
                day: 'Jan 03, 2017 (Tuesday)',
                courses: Immutable.Map()
            }),
            Immutable.Record({
                day: 'Jan 04, 2017 (Wednesday)',
                courses: Immutable.Map()
            }),
            Immutable.Record({
                day: 'Jan 05, 2017 (Thursday)',
                courses: Immutable.Map()
            }),
            Immutable.Record({
                day: 'Jan 06, 2017 (Friday)',
                courses: Immutable.Map()
            }),
            Immutable.Record({
                day: 'Jan 07, 2017 (Saturday)',
                courses: Immutable.Map()
            })
        ])
    })
}
```
