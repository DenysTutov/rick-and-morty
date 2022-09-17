import { FilterContext } from '../App';
import { useContext } from 'react';

export const Filter = () => {
  const {
    sortByDate,
    handleChangeSortByDate,
    sortByEpisodes,
    handleChangeSortByEpisodes,
    filter,
    handleChangeFilter,
  } = useContext(FilterContext);

  return (
    <form>
      <select onChange={handleChangeSortByDate} value={sortByDate}>
        <option value="">--</option>
        <option value="decr">From new to old</option>
        <option value="incr">From old to new</option>
      </select>

      <select onChange={handleChangeSortByEpisodes} value={sortByEpisodes}>
        <option value="">--</option>
        <option value="decr">From max to min</option>
        <option value="incr">From min to max</option>
      </select>

      <label>
        <input
          type="text"
          name="filter"
          title="Enter search name"
          placeholder="Enter search name"
          onChange={handleChangeFilter}
          value={filter}
        />
      </label>
    </form>
  );
};
