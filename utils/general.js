export function isValidDate(date) {
  return date && date.valueOf && !Number.isNaN(date.valueOf());
}

export function formatDate(maybeDate, options = { showTime: false }) {
  const date = new Date(maybeDate);
  return isValidDate(date)
    ? `${date.toLocaleDateString()}${
        options.showTime ? " " + date.toLocaleTimeString() : ""
      }`
    : "";
}
