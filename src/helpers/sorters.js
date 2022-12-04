import moment from 'moment';

const sortByNumber = (a, b) => parseInt(a) - parseInt(b);

const sortByAlphabet = (a = '', b = '') => {
  const varA = a.toLowerCase();
  const varB = b.toLowerCase();
  if (varA < varB) return -1;
  if (varA > varB) return 1;
  return 0;
};

const sortByDate = (a, b) =>
  moment(b.transactionDate).diff(moment(a.transactionDate));

export { sortByNumber, sortByAlphabet, sortByDate };
