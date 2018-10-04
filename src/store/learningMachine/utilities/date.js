export const getDate = () => {
  const current = new Date();
  const today = current.toISOString().substring(0, 10);
  return today;
};
