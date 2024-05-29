import axios from "axios";
import programmingLanguagesColors from "./config";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export const getUser = async (login) => {
  try {
    const data = await api.get(`users/${login}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const getUserRepos = async (login) => {
  try {
    const data = await api.get(`users/${login}/repos`);
    return data;
  } catch (error) {
    return null;
  }
};

export const getLanguagesFromRepos = (repos) => {
  let languages = [];

  repos.forEach((repository) => {
    const programmingLanguage = repository.language;
    /* Caso a linguagem de programação vinda do GitHub seja
    "null", ele não executa. */
    if (programmingLanguage) {
      const lang = {
        name: programmingLanguage,
        color: programmingLanguagesColors[programmingLanguage.toLowerCase()],
        amount: repos.reduce(
          (sum, repo) =>
            repo.language === programmingLanguage ? sum + 1 : sum,
          0
        ),
      };

      let languageExists = false;
      languages.forEach((lang) => {
        if (lang.name === programmingLanguage) languageExists = true;
      });

      if (!languageExists) languages.push(lang);
    }
  });

  languages = languages.sort((a, b) => b.amount - a.amount);

  return languages;
};
