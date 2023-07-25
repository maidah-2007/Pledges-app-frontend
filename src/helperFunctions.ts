export const isPhoneNumberValid = (phoneNumber: string): boolean => {
  // Pattern to allow 07XXX and +254XXX will be /^[0-9\+]{8,13}$/

  // Currently only allowing numbers starting with the country code and must be between 11 and 13 characteds
  return phoneNumber.replace(/\s|-/g, '').match(/^[+][0-9]{11,13}$/)
    ? true
    : false;
};

export const isEmailValid = (email: string): boolean => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email,
  )
    ? true
    : false;
};

export const getSibasiDateFormat = (): string => {
  return 'dddd, MMM Do YYYY';
};

export const formUrlEncoded = (x) =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

export const convertURLParamsToObject = (urlParams: string) => {
  return JSON.parse(
    '{"' + urlParams.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === '' ? value : decodeURIComponent(value);
    },
  );
};
