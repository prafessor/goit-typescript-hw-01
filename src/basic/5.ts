enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day > 4) {
    return true;
  } else {
    return false;
  }
};

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Tuesday));
console.log(isWeekend(DayOfWeek.Saturday));
console.log(isWeekend(DayOfWeek.Sunday));
