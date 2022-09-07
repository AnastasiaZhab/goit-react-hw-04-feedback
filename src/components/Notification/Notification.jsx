import s from './Notification.module.css';
import PropTypes from 'prop-types'

const Notification = ({ message }) => {
    return (<span className={s.notification}>{message}</span>)
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}