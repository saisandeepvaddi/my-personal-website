export function isValidDate(date) {
  return date && date.valueOf && !Number.isNaN(date.valueOf());
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(maybeDate) {
  const date = new Date(maybeDate);
  return isValidDate(date)
    ? `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    : "";
}
