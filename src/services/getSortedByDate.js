export const getSortedByDate = ({ allCharacters, sortByDate }) => {
  if (!sortByDate) return allCharacters;

  return [...allCharacters].sort((a, b) => {
    const date1 = Date.parse(a.created);
    const date2 = Date.parse(b.created);

    return sortByDate === 'decr' ? date2 - date1 : date1 - date2;
  });
};
