import propTypes from "prop-types";

import styles from "./style.module.scss";

import Repository from "./Repo";

Repositories.propTypes = {
  repositories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      html_url: propTypes.string.isRequired,
      description: propTypes.string,
      language: propTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: propTypes.string,
};

function Repositories({ repositories, currentLanguage }) {
  const repositoriesArray = repositories
    .filter(
      (repo) =>
        currentLanguage === undefined || repo.language === currentLanguage
    )
    .map((repo) => <Repository key={repo.id} repository={repo} />);

  return (
    <>
      <h2 className={styles.reposTitle}>Repositórios</h2>
      <div className={styles.reposContainer}>{repositoriesArray}</div>
    </>
  );
}

export default Repositories;
