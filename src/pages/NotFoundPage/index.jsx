import { Link } from "react-router-dom";
import propTypes from "prop-types";

import styles from "./index.module.scss";

NotFoundPage.propTypes = {
  text: propTypes.string.isRequired,
};

function NotFoundPage({ text }) {
  return (
    <div className={styles.loadingData}>
      <h3>{text}</h3>

      <Link to="/" className={styles.returnLink}>
        Voltar
      </Link>
    </div>
  );
}

export default NotFoundPage;
