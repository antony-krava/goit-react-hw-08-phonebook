import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors, authOperations } from '../../redux/authorization';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, avatar, onLogout }) => {
  return (
    <div className={styles.usermenuContainer}>
      <img src={avatar} alt="" width="32" className={styles.usermenuAvatar} />

      <span className={styles.username}>Welcome, {name}</span>

      <button type="button" className="btn btn-secondary" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);