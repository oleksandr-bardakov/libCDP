import moment from 'moment';

const objectFilter = (filtrationObject, value) => {
  for (const key in filtrationObject) {
    if (key === 'EndDate' || 'StartDate') {
      if (moment(filtrationObject[key], 'YYYY-MM-DD').format('MM/DD/YYYY').includes(value)) {
        return filtrationObject;
      }
    }
    if (key !== 'Id') {
      if ((typeof filtrationObject[key] !== 'object')) {
        if (filtrationObject[key].toString().toUpperCase().includes(value.toUpperCase())) {
          return filtrationObject;
        }
      } else {
        const deepResult = objectFilter(filtrationObject[key], value);
        if (deepResult) {
          return deepResult;
        }
      }
    }
  }
};

export const recursiveSearch = (incomingData, value) => {
  return incomingData.filter((item) => {
    return objectFilter(item, value);
  });
};
