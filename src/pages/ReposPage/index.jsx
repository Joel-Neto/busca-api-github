import styles from "./index.module.scss";

import UserProfile from "../../components/UserProfile";
import LangsFilter from "../../components/LangsFilter";
import Repositories from "../../components/Repositories";
import {
  getLanguagesFromRepos,
  getUser,
  getUserRepos,
} from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ReposPage() {
  const { username } = useParams();

  console.log(username);

  const [user, setUser] = useState();
  const [repos, setRepos] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          getUser(username),
          getUserRepos(username),
        ]);

        if (!userResponse && !reposResponse) {
          throw new Error("Usuário e repositórios não foram encontrados!");
        }

        setUser(userResponse.data);
        setRepos(reposResponse.data);
        setLanguages(getLanguagesFromRepos(reposResponse.data));
      } catch (error) {
        console.log(error.message);
        setNotFound(true);
      }
    };

    fetchData();
  }, [username]);

  const onFilterClick = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  if (notFound) {
    return (
      <div className={styles.loadingData}>
        <h3>Usuário e Repositórios não encontrados...</h3>

        <Link to="/" className={styles.returnLink}>
          Voltar
        </Link>
      </div>
    );
  }

  if (!user || !repos) {
    return (
      <div className={styles.loadingData}>
        <h3>Carregando dados...</h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sideBar}>
        <UserProfile user={user} />
        <LangsFilter
          languages={languages}
          currentLanguage={currentLanguage}
          onFilterClick={onFilterClick}
        />
      </aside>
      <main className={styles.main}>
        <Repositories repositories={repos} currentLanguage={currentLanguage} />
      </main>
    </div>
  );
}

export default ReposPage;
