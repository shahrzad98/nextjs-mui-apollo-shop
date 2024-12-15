import moment from 'jalali-moment';

export const handleExpiryTimestamp = (days, hours, minutes, seconds) => {
  if (days > 0) return `${days} روز`;
  else return `${hours}:${minutes}:${seconds}`;
};

export const jalaliDateConvertor = data =>
  moment(data).locale('fa').format('YYYY/M/D');
