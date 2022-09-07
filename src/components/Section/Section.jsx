import s from "./Section.module.css";
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
