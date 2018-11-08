export const timestampToDate = function (timestamp) {
  const time = new Date(timestamp);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const y = time.getFullYear();
  const m = months[time.getMonth()];
  const d = time.getDate();
  return `${d} ${m}, ${y}`;
};
