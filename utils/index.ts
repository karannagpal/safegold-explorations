export const getLocalDateTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
