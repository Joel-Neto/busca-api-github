import styles from "./style.module.scss";
import propTypes from "prop-types";
import { FaTrashCan } from "react-icons/fa6";

LangsFilter.propTypes = {
  languages: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      color: propTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: propTypes.string,
  onFilterClick: propTypes.func,
};

function LangsFilter({ languages, currentLanguage, onFilterClick }) {
  return (
    <div className={styles.languagesContainer}>
      {languages.map(({ name, color, amount }) => (
        <button
          key={name}
          className={`${styles.btnLang} ${
            currentLanguage === name ? "selected" : ""
          }`}
          style={{ color: color ?? "auto" }}
          onClick={() => onFilterClick && onFilterClick(name)}
        >
          <span>{name}</span>
          <span>{amount}</span>
        </button>
      ))}

      <button
        className={styles.cleaner}
        onClick={() => onFilterClick && onFilterClick(undefined)}
      >
        Limpar
        <FaTrashCan />
      </button>
    </div>
  );
}

export default LangsFilter;
