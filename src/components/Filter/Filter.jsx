import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/phonebook';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <>
      <h3 className={styles.title}>Find contact by name</h3>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);