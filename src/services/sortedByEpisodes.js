import { sortedByDate } from './sortedByDate';

export const sortedByEpisodes = ({
  allCharacters,
  sortByDate,
  sortByEpisodes,
}) => {
  const sortedByDateList = sortedByDate({ allCharacters, sortByDate });

  if (!sortByEpisodes) return sortedByDateList;

  return [...sortedByDateList].sort((a, b) => {
    const episodes1 = a.episode.length;
    const episodes2 = b.episode.length;

    return sortByEpisodes === 'decr'
      ? episodes2 - episodes1
      : episodes1 - episodes2;
  });
};
