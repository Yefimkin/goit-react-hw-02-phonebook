import PropTypes from 'prop-types';
import styles from './ContactItem.module.css'


const ContactItem = ({ id, name, number, onDelete }) => (
    <li key={id} className={styles.contact}>
        <p className={styles.contactText}>{name}</p>
        <p className={styles.contactText}>{number}</p>
        <button
            type="button"
            id={id}
            onClick={() => onDelete(id)}
            className={styles.button}
        >
        Delete
        </button>
    </li>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactItem;