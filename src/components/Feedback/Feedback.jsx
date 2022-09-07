import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({options, onLeaveFeedback}) => {

    return (<div className={s.div}>
        {options.map(option => {
            return (
                <button type="button" className={s.button} key={option} name={option} onClick={onLeaveFeedback} >{option}</button>
            )
        })}


    </div>
    
)
};

export default Feedback;

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}