export function formatter (date, now=new Date()) {
  const target = new Date(Number(date));
  const difference = now-target;
  const mins = difference / (1000 * 60);
  if (mins < 1) {
    return "刚刚";
  } else if (mins < 60){
    return `${parseInt(mins)}分钟前`;
  }
  const hours = mins / 60;
  const days = now.getDate() - target.getDate();
  const splitTimeString = target.toTimeString().split(':');
  const targetTime = splitTimeString[0] + ':' + splitTimeString[1];
  if (hours < 24) {
    if (days < 1) {
      return `${parseInt(hours)}小时前`;
    } else {
      return `昨天 ${targetTime}`;
    }
  }
  const targetYear = target.getFullYear();
  const years = now.getFullYear() - targetYear;
  const targetMonth = target.getMonth() + 1;
  const targerDate = target.getDate();
  if (years < 1) {
    return `${targetMonth}月${targerDate} ${targetTime}`;
  } else {
    return `${targetYear}年${targetMonth}月${targerDate}日 ${targetTime}`
  }
}