import { useState } from 'react';
import InputSearch from './forms/InputSearch';

const SearchCategory = () => {
	const [inputSearch, setInputSearch] = useState('');

	const onInputSearch = ev => {
		setInputSearch(ev.target.value);
	};

	const handleSubmit = ev => {
		ev.preventDefault();
		console.log(inputSearch);
	};

	return (
		<form onSubmit={ev => handleSubmit(ev)}>
			<InputSearch
				name='search'
				placeholder='Buscar gifs'
				value={inputSearch}
				onChange={ev => onInputSearch(ev)}
			/>
		</form>
	);
};

export default SearchCategory;
