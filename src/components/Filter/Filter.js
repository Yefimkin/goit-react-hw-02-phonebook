import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please enter name to find contact"
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default Filter;