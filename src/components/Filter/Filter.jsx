import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filter__label}>
    Find contact by name
    <input
      type="text"
      className={css.filter__input}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
