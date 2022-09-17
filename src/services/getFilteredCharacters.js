import { getSortedByDate } from './getSortedByDate';
import { getSortedByEpisodes } from './getSortedByEpisodes';

export const getFilteredCharacters = ({
  allCharacters,
  sortByDate,
  sortByEpisodes,
  filter,
}) => {
  const normalizeFilter = filter.toLowerCase();

  const sortedByDateList = getSortedByDate({ allCharacters, sortByDate });

  const sortedByEpisodesList = getSortedByEpisodes({
    sortedByDateList,
    sortByEpisodes,
  });

  return sortedByEpisodesList?.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
