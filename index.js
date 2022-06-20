function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    return true

  return false
}

function getDay(date) {
  const day = new Date(date).getDay()
  if (day === 0)
    return 7
  return day
}

function getWeeksByYear(year = new Date().getFullYear()) {
  const currentYearDays = isLeapYear(year) ? 366 : 365
  const beforeDays = 7 - getDay(`${year}-01-01`) + 1
  const afterDays = getDay(`${year}-12-31`)

  const weeks = (currentYearDays - beforeDays - afterDays) / 7
  return weeks
}

getWeeksByYear() // 51
getWeeksByYear(2020) // 51
