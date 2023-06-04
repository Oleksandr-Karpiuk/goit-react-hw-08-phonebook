import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <label className={css.filter__label}>
      Find contact by name
      <input type="text" className={css.filter__input} onChange={onChange} />
    </label>
  );
};
export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
