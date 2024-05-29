import propTypes from "prop-types";

import styles from "./style.module.scss";
import colors from "../../../services/config";

Repository.propTypes = {
  repository: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    html_url: propTypes.string.isRequired,
    description: propTypes.string,
    language: propTypes.string,
  }).isRequired,
};

function Repository({ repository }) {
  const divColor = colors[repository.language?.toLowerCase()];

  return (
    <div
      className={styles.repositoryContainer}
      style={{ borderLeftColor: divColor ?? "auto" }}
    >
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
      <div style={{ color: divColor ?? "auto" }}>
        {repository.language && <span>{repository.language}</span>}
        <a href={repository.html_url} target="_blank">
          ver
        </a>
      </div>
    </div>
  );
}

export default Repository;
