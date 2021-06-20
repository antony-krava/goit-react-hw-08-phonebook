import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/authorization';
import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);