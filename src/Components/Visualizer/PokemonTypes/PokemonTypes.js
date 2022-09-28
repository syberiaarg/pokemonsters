import { firstLetterUpper } from "src/utils";
import styles from "./PokemonTypes.module.css";
import PropTypes from "prop-types";

const PokemonTypes = ({ types, id }) => (
  <div className={styles.types}>
    {types.map(({ type: { name } }) => (
      <div
        className={styles.type}
        style={{ backgroundColor: `var(--color-${name})` }}
        key={name}
      >
        <label>{firstLetterUpper(name)}</label>
      </div>
    ))}
  </div>
);

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      slot: PropTypes.number,
      type: PropTypes.shape({ name: PropTypes.string }),
    })
  ),
  id: PropTypes.number,
};

PokemonTypes.defaultProps = {
  types: [
    {
      slot: 1,
      type: { name: "normal" },
    },
  ],
  id: 1,
};

export default PokemonTypes;
