import _ from 'lodash';

// BEGIN
const normalize = (lesson) => {
    lesson.name = _.capitalize(lesson.name.toLowerCase());
    lesson.description = lesson.description.toLowerCase();
};

export default normalize;
  // END