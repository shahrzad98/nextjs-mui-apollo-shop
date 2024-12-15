import { snackbarsState } from './vars';

const defaultSnackbarArgs = {
  autoClose: true,
  timeOut: 5000,
  message: '',
  severity: 'success',
  position: 'bottom-center'
};

/**
 * a function that get some options and show a snackbar.
 * @param {Object} newitem - snackbar options.
 * @param {number} newitem.timeOut - if autoClose param be true, snackbar will be closed after value of this param by milliseconds.
 * @param {boolean} newitem.autoClose - if true snackbar will be closed after timeOut value.
 * @param {string} newitem.message - the message that be shown on snackbar.
 * @param {'success' | 'error' | 'info' | 'warning'} newitem.severity - this param set's some properties of snackbar; like color or icon.
 * @param {`${('top' | 'bottom')}-${('right' | 'left' | 'center')}`} newitem.position - this param set's where should be snackbar shown.
 */
export const openSnackbar = newitem => {
  const prevSnackbars = snackbarsState();
  const date = new Date();
  const initialTime = (date.getTime() / 100).toFixed();
  snackbarsState({
    ...prevSnackbars,
    [initialTime]: { ...defaultSnackbarArgs, ...newitem }
  });
};

export const removeSnackbar = hash => {
  const prevSnackbars = snackbarsState();
  delete prevSnackbars[hash];
  snackbarsState(prevSnackbars);
};
