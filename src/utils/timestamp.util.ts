import * as moment from 'moment-timezone';

export function generateKenyanTimestamp(): string {
  const kenyanTimezone = 'Africa/Nairobi';
  const now = moment().tz(kenyanTimezone);
  const formattedTimestamp = now.format('YYYY-MM-DD HH:mm');

  // console.log(formattedTimestamp);
  return formattedTimestamp;
}
