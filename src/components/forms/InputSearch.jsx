import PropTypes from 'prop-types';
import SearchIcon from '../icons/SearchIcon';
import style from './InputSearch.module.css';

const InputSearch = ({ className, ...props }) => (
	<div className={`${style.wrapper} ${className || ''}`}>
		<SearchIcon className={style.icon} />
		<input {...props} className={style.input} type='text' />
	</div>
);

InputSearch.propTypes = {
	className: PropTypes.string
};

export default InputSearch;
