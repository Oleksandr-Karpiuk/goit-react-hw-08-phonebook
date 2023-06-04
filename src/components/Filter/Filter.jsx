import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import debounce from 'lodash.debounce';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  const delayedOnChange = debounce(onChange, 300);

  return (
    <label className={css.filter__label}>
      Find contact by name
      <input
        type="text"
        name="filter"
        placeholder="Enter name for Search"
        className={css.filter__input}
        onChange={delayedOnChange}
      />
    </label>
  );
};
export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  delayedOnChange: PropTypes.func,
};
