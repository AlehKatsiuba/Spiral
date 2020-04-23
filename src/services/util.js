
export const delayPromise = time => data => {
  return new Promise((res) => {
    setTimeout(() => res(data), time);
  });
}

export function generateInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function emulateServerResponse(data) {
  return Promise.resolve(data).then(delayPromise(generateInt(250, 2000)));
}

export function currencyFormat(number = 0, currency = 'USD', locale = 'default') {
  return number.toLocaleString(locale, { style: 'currency', currency: currency });
}

export function dateFormat(date = new Date(), options = { month: 'short', day: '2-digit' }, locale = 'default') {
  return date.toLocaleString(locale, options);
}
