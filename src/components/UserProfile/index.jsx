import styles from "./style.module.scss";
import propTypes from "prop-types";
import {
  FaUserGroup,
  FaBriefcase,
  FaLocationDot,
  FaLink,
} from "react-icons/fa6";

UserProfile.propTypes = {
  user: propTypes.shape({
    login: propTypes.string.isRequired,
    avatar_url: propTypes.string.isRequired,
    repos_url: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    company: propTypes.string,
    blog: propTypes.string,
    location: propTypes.string,
    followers: propTypes.number.isRequired,
    following: propTypes.number.isRequired,
  }).isRequired,
};

function UserProfile({ user }) {
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <img
          className={styles.profileAvatar}
          src={user.avatar_url}
          alt="User Avatar"
        />

        <h1 className={styles.profileLogin}>{user.login}</h1>
        <h2 className={styles.profileName}>{user.name}</h2>
      </div>

      <div className={styles.profileData}>
        <p>
          <FaUserGroup />
          <span>
            {user.followers} seguidores | {user.following} seguindo
          </span>
        </p>
        {user.company && (
          <p>
            <FaBriefcase />
            <span>{user.company}</span>
          </p>
        )}
        {user.location && (
          <p>
            <FaLocationDot />
            <span>{user.location}</span>
          </p>
        )}
        {user.blog && (
          <p>
            <FaLink />
            <a href={`\\${user.blog}`}>{user.blog}</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
