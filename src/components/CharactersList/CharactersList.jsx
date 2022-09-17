import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import styles from './CharactersList.module.scss';

export const CharactersList = ({ characters }) => {
  return (
    characters && (
      <>
        <h2>Characters</h2>
        <ul className={styles.list}>
          {characters.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </ul>
      </>
    )
  );
};
