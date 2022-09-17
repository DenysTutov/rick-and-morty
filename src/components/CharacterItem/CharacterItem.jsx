import { normalizedDate } from 'services/normalizedDate';
import styles from './CharacterItem.module.scss';

export const CharacterItem = ({ character }) => {
  const episodeList = character.episode
    .map(number => number.replace(/[^0-9]/g, ''))
    .join(', ');

  return (
    <li className={styles.item}>
      <img src={character.image} alt={character.name} className={styles.img} />

      <div>
        <p>{character.name}</p>
        <p>Species: {character.species}</p>
        <p>
          Last known location:{' '}
          <a href={character.location.url}>{character.location.name}</a>
        </p>
        <p>Created on: {normalizedDate(character.created)}</p>

        <div>
          <p>Episodes: {character.episode.length}</p>

          <div>Episodes List: {episodeList}</div>
        </div>
      </div>
    </li>
  );
};
