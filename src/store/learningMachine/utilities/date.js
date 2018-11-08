import moment from 'moment';

export const getDate = () => {
  const today = moment().format();
  return today;
};
