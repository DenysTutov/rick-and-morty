export const normalizedDate = str => {
  const option = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const date = new Date(str);

  return date.toLocaleString('ua', option);
};
