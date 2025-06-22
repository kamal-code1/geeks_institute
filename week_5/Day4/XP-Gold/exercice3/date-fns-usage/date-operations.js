const { format, addDays } = require('date-fns');

function displayDate() {
  const now = new Date();
  const newDate = addDays(now, 5);
  console.log("Date +5 jours :", format(newDate, 'yyyy-MM-dd HH:mm:ss'));
}

module.exports = displayDate;
