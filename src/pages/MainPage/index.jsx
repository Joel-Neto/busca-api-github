import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import imgGithubLogo from "../../assets/img/github-logo.svg";
import "./index.scss";

function MainPage() {
  const [userName, setUserName] = useState("");
  
  const disable = userName.trim().length > 3;

  return (
    <div className="container">
      <img className="imgLogo" src={imgGithubLogo} alt="Logo Github" />
      <h1 className="mainPageTitle">API GitHub</h1>

      <div className="mainPageForm">
        <input
          type="text"
          placeholder="Digite o seu nome..."
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        {disable && (
          <Link to={`/repositories/${userName}`}>
            <FaSearch />
          </Link>
        )}
      </div>
    </div>
  );
}

export default MainPage;
