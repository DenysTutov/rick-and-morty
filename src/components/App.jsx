import { useState, useEffect, createContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as API from '../services/api';
import { AppBar } from './AppBar/AppBar';
import { CharactersList } from './CharactersList/CharactersList';
import { getFilteredCharacters } from 'services/getFilteredCharacters';

export const FilterContext = createContext();

export const App = () => {
  const [allCharacters, setAllCharacters] = useState(null);
  const [sliceCharacter, setSliceCharacter] = useState([]);
  const [sortedCharacters, setSortedCharacters] = useState(null);

  const [sortByDate, setSortByDate] = useState('');
  const [sortByEpisodes, setSortByEpisodes] = useState('');
  const [filter, setFilter] = useState('');

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleChangeSortByDate = e => setSortByDate(e.target.value);

  const handleChangeSortByEpisodes = e => setSortByEpisodes(e.target.value);

  const handleChangeFilter = e => setFilter(e.target.value);

  const loadMore = () => {
    if (sliceCharacter.length > allCharacters.length - 1) {
      setHasMore(false);
      return;
    }
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    API.getAllCharacters()
      .then(data => setAllCharacters(data))
      .catch(console.log);
  }, []);

  useEffect(() => {
    const visibleCharacters = getFilteredCharacters({
      allCharacters,
      sortByDate,
      sortByEpisodes,
      filter,
    });

    setHasMore(true);
    setSliceCharacter([]);
    setPage(1);
    setSortedCharacters(visibleCharacters);
  }, [allCharacters, filter, sortByDate, sortByEpisodes]);

  useEffect(() => {
    if (sortedCharacters?.length < page * 10) setHasMore(false);

    if (sortedCharacters) {
      const slice = sortedCharacters.slice((page - 1) * 10, page * 10);
      setSliceCharacter(prev => [...prev, ...slice]);
    }
  }, [page, sortedCharacters]);

  return (
    <FilterContext.Provider
      value={{
        sortByDate,
        handleChangeSortByDate,
        sortByEpisodes,
        handleChangeSortByEpisodes,
        filter,
        handleChangeFilter,
      }}
    >
      <div>
        <AppBar />

        {allCharacters && (
          <InfiniteScroll
            dataLength={sliceCharacter.length} //This is important field to render the next data
            next={loadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <CharactersList characters={sliceCharacter} />
          </InfiniteScroll>
        )}
      </div>
    </FilterContext.Provider>
  );
};
