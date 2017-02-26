export default {
    TIME_CONFLICT: (addCourse, enrolledCourse) => {
        return `${addCourse} conflicts with ${enrolledCourse}`;
    }
};
