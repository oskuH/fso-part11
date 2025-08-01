/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const info = (...params) => {
  if (process.env.NODE_ENV !== 'tst') {
    console.log(...params);
  }
};

const error = (...params) => {
  if (process.env.NODE_ENV !== 'tst') {
    console.error(...params);
  }
};

module.exports = {
  info, error
};
